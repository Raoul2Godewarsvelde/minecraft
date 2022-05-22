import create from 'zustand'

export const useCubeStore = create((set) => ({
    position: {x: 0, y: 0, z: 0},
    setPosition: (position) => set((state) => ({ position: ({ x: position.x, y: position.y, z: position.z }) })),

    size: {x: 1, y: 1, z: 1},
    setSize: (size) => set((state) => ({ size: ({ x: size.x, y: size.y, z: size.z }) })),

    segments: {x: 1, y: 1, z: 1},
    setSegments: (segments) => set((state) => ({ segments: ({ x: segments.x, y: segments.y, z: segments.z }) })),

    scale: {x: 1, y: 1, z: 1},
    setScale: (scale) => set((state) => ({ scale: ({ x: scale.x, y: scale.y, z: scale.z }) })),

    rotation: {x: 0, y: 0, z: 0},
    setRotation: (rotation) => set((state) => ({ rotation: ({ x: rotation.x, y: rotation.y, z: rotation.z }) })),
    
    opacity: 0.50,
    setOpacity: (value) => set((state) => ({ opacity: value })),

    wireframe: false,
    setWireframe: (value) => set((state) => ({ wireframe: value }))
}))