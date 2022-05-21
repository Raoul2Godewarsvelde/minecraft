import create from 'zustand'

export const useHomeStore = create((set) => ({
    size: {
        x: 2,
        y: 2,
        z: 2
    },
    width: 2,
    height: 2,
    depth: 2,
    handleWidth: (value) => set(state => ({ width: value})),
    handleHeight: (value) => set(state => ({ height: value})),
    handleDepth: (value) => set(state => ({ depth: value})),
    rotation_x: 0.01,
    handleRotationX: (value) => set(state => ({ rotation_x: value})),
    opacity: 0.50,
    handleOpacity: (value) => set(state => ({ opacity: value})),
}))