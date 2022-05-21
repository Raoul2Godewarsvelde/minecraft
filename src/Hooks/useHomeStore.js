import create from 'zustand'

export const useHomeStore = create((set) => ({
    width: 2,
    height: 2,
    depth: 2,
    handleWidth: (value) => set(state => ({ width: value})),
    handleHeight: (value) => set(state => ({ height: value})),
    handleDepth: (value) => set(state => ({ depth: value}))
}))