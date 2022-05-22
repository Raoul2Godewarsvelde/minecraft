import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

export const useSceneStore = create((set) => ({
    cubes: getLocalStorage('world') || 
        [
            { position: [-2, -2, -2], color: 'pink' }
        ],
    addCube: (x, y, z, color) => set((state) => ({ cubes: [...state.cubes, { position: [x, y, z], color }] })),
    color: '#ffffff'
}))