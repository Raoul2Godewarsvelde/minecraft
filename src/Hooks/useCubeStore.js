import create from 'zustand'

export const useCubeStore = create((set) => ({
    size: {x: 1, y: 1, z: 1},
    setSize: (size) => set((state) => ({ size: ({ x: size.x, y: size.y, z: size.z}) })),

    rotation: {x: 1, y: 1, z: 1},
    setRotation: (rotation) => set((state) => ({ rotation: ({ x: rotation.x, y: rotation.y, z: rotation.z}) })),
    
    opacity: 0.50,
    setOpacity: (value) => set(state => ({ opacity: value})),
}))