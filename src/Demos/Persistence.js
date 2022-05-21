
console.clear()

const OPTIONS = {
  fadeFactor: 0.1,
  scaleX: 0,
  scaleY: 0,
  rotationAngle: 0
}

const OBJECTS_COUNT = 100

const gui = new dat.GUI()
gui.add(OPTIONS, 'fadeFactor', 0, 0.3)
gui.add(OPTIONS, 'scaleX', -1, 1, 0.05)
gui.add(OPTIONS, 'scaleY', -1, 1, 0.05)
gui.add(OPTIONS, 'rotationAngle', -5, 5, 0.1)

// Create orthographic camera, so we can look at our fullscreen quads
let orthoCamera
{
  const left = -innerWidth / 2
  const right = innerWidth / 2
  const top = -innerHeight / 2
  const bottom = innerHeight / 2
  const near = -100
  const far = 100
  orthoCamera = new THREE.OrthographicCamera(left, right, top, bottom, near, far)
  orthoCamera.position.z = -10
  orthoCamera.lookAt(new THREE.Vector3(0, 0, 0))
}

const fullscreenQuadGeometry = new THREE.PlaneGeometry(innerWidth, innerHeight)

const uvMatrix = new THREE.Matrix3()
 // tx : Float, ty : Float, sx : Float, sy : Float, rotation : Float, cx : Float, cy : Float

const fadeMaterial = new THREE.ShaderMaterial({
  uniforms: {
    inputTexture: { value: null },
    fadeFactor: { value: OPTIONS.fadeFactor },
    uvMatrix: { value: uvMatrix }
  },
  vertexShader: `
    uniform mat3 uvMatrix;
    varying vec2 vUv;
    void main () {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vUv = (uvMatrix * vec3(uv, 1.0)).xy;
    }
  `,
  fragmentShader: `
    uniform sampler2D inputTexture;
    uniform float fadeFactor;
    varying vec2 vUv;
    void main () {
      float dist = distance(vUv, vec2(0.5));
      vec4 texColor = texture2D(inputTexture, vUv);
      vec4 fadeColor = vec4(0.0, 0.0, 0.0, 1.0);
      gl_FragColor = mix(texColor, fadeColor, fadeFactor);
    }
  `
})
const fadePlane = new THREE.Mesh(
  fullscreenQuadGeometry,
  fadeMaterial
)

const resultMaterial = new THREE.MeshBasicMaterial({ map: null })
const resultPlane = new THREE.Mesh(
  fullscreenQuadGeometry,
  resultMaterial
)

// Create WebGLRenderer and append its canvas to DOM
const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio || 1)
document.body.appendChild(renderer.domElement)

// Create PerspectiveCamera
let camera
{
  const fieldOfView = 45
  const screenAspect = innerWidth / innerHeight
  const near = 0.1
  const far = 10
  camera = new THREE.PerspectiveCamera(fieldOfView, screenAspect, near, far)
  camera.position.z = 8
}

// Create Scene
const scene = new THREE.Scene()

// Programatically create a checkerbox texture for each object
const texture = new THREE.DataTexture(new Uint8Array([  // data
  0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC,
  0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF,
  0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC,
  0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF,
  0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC,
  0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF,
  0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC,
  0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF, 0xCC, 0xFF,
]), 8, 8, THREE.LuminanceFormat)

// Create objects to render
const boxGeometry = new THREE.BoxGeometry()
const sphereGeometry = new THREE.SphereGeometry()
const torusGeometry = new THREE.TorusGeometry()
const coneGeometry = new THREE.ConeGeometry()

const meshes = []
const meshTransforms = []

const sharedUniforms = {
  checkerTexture: { value: texture }
}

for (let i = 0; i < OBJECTS_COUNT; i++) {
  const randGeometryPicker = Math.random()
  let geometry = boxGeometry
  if (randGeometryPicker >= 0.25) {
    geometry = sphereGeometry
  }
  if (randGeometryPicker >= 0.5) {
    geometry = torusGeometry
  }
  if (randGeometryPicker >= 0.75) {
    geometry = coneGeometry
  }
  
  const randR = Math.random()
  const randG = Math.random()
  const randB = Math.random()
  const multColor = new THREE.Vector4(randR, randG, randB, 1)

  const material = new THREE.ShaderMaterial({
    uniforms: {
      ...sharedUniforms,
      multColor: { value: multColor }
    },
    vertexShader: `
      varying vec2 vUv;
      void main () {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }
    `,
    fragmentShader: `
      uniform sampler2D checkerTexture;
      uniform vec4 multColor;
      varying vec2 vUv;
      void main () {
        gl_FragColor = texture2D(checkerTexture, vUv) * multColor;
      }
    `
  })
  
  const mesh = new THREE.Mesh(geometry, material)
  
  // Assign random positions and scale to each object
  meshTransforms.push({
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5,
    z: (Math.random() - 0.5) * 2,
    scale: Math.random() * 0.2 + 0.1
  })
  meshes.push(mesh)
  
  scene.add(mesh)
}

// Create two extra framebuffers manually
// It is important we use let instead of const variables, as we will need to swap them
let framebuffer1 = new THREE.WebGLRenderTarget(innerWidth, innerHeight)
let framebuffer2 = new THREE.WebGLRenderTarget(innerWidth, innerHeight)

renderer.setClearColor(0x111111)
renderer.setRenderTarget(framebuffer1)
renderer.clearColor()
renderer.setRenderTarget(framebuffer2)
renderer.clearColor()

// Start render loop
renderer.setAnimationLoop(drawFrame)

function drawFrame (timeElapsed) {
  timeElapsed /= 1000
  
  // Animate our objects around the scene
  for (let i = 0; i < OBJECTS_COUNT; i++) {
    const mesh = meshes[i]
    const meshTransform = meshTransforms[i]
    
    const moveRadius = 0.4
    const x = meshTransform.x + Math.cos(timeElapsed + meshTransform.y * 2) * moveRadius
    const y = meshTransform.y + Math.sin(timeElapsed + meshTransform.x * 2) * moveRadius
    const z = meshTransform.z + Math.cos(timeElapsed - meshTransform.x * 2) * moveRadius
    
    const rotAddSpeed = timeElapsed
    
    const rotX = x + rotAddSpeed
    const rotY = y + rotAddSpeed
    const rotZ = z + rotAddSpeed
    
    mesh.position.set(x, y, z)
    mesh.rotation.set(rotX, rotY, rotZ)
    mesh.scale.set(meshTransform.scale, meshTransform.scale, meshTransform.scale)
  }
  
  renderer.autoClearColor = false
  fadeMaterial.uniforms.inputTexture.value = framebuffer1.texture
  fadeMaterial.uniforms.fadeFactor.value = OPTIONS.fadeFactor
  renderer.setRenderTarget(framebuffer2)
  renderer.render(fadePlane, orthoCamera)
  renderer.render(scene, camera)
  
  renderer.setRenderTarget(null)
  resultPlane.material.map = framebuffer2.texture
  renderer.render(resultPlane, orthoCamera)
  
  const uvScaleX = mapNumberRange(OPTIONS.scaleX, -1, 1, 1.05, 0.95)
  const uvScaleY = mapNumberRange(OPTIONS.scaleY, -1, 1, 1.05, 0.95)
  const rotation = THREE.MathUtils.degToRad(OPTIONS.rotationAngle)
  uvMatrix.setUvTransform(0, 0, uvScaleX, uvScaleY, rotation, 0.5, 0.5)
  
  const swap = framebuffer1
  framebuffer1 = framebuffer2
  framebuffer2 = swap
}

function mapNumberRange (val, inMin, inMax, outMin, outMax) {
  return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
