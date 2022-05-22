import create from 'zustand'

import CUBE from '@json/Components/Primitives/cube'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useSceneStore = create((set) => ({
    objectSelected: null,
    setObjectSelected: (objectSelected) => set((state) => ({ objectSelected: objectSelected })),

    /* saveWorld: () => set((state) => {
        console.log('cubes', state.cubes)
        setLocalStorage('world', state.cubes)
    }), */

    cubes: getLocalStorage('world') || 
        [
            { name: `cube_`, position: {x: -2, y: 0, z: -2}, color: '#ff00ff' }
        ],
    addCube: (x, y, z, color) => set((state) => ({ cubes: [...state.cubes, { CUBE }] })),

    color: '#00ffff'
}))