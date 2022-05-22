import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useSceneStore = create((set) => ({
    saveWorld: () => set((state) => {
        console.log('cubes', state.cubes)
        setLocalStorage('world', state.cubes)
    }),

    cubes: getLocalStorage('world') || 
        [
            /* { position: {x: -2, y: -2, z: -2}, color: '#ff00ff' } */
        ],
    addCube: (x, y, z, color) => set((state) => ({ cubes: [...state.cubes, { position: {x: 0, y: 2, z: 0}, color: '#ff0000' }] })),

    color: '#00ffff'
}))