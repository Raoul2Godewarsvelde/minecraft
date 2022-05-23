import create from 'zustand'

import cube from '@json/Components/Primitives/cube'

/* const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key)) */
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useSceneStore = create((set) => ({

    // WORLD

    // SCENE

    objectSelected: null,
    setObjectSelected: (objectSelected) => set((state) => ({ objectSelected: objectSelected })),

    saveWorld: () => set((state) => {
        console.log('cubes', state.cubes)
        setLocalStorage('world', state.cubes)
    }),

    resetWorld: () => set((state) => ({
        cubes: []
    })),


    cubes: /* getLocalStorage('world') || */ 
        [
            {
                state: {
                    key: null,
                    name: 'stored_cube',
                    transform: {
                        position: {
                            x: 2,
                            y: 2,
                            z: 2
                        },
                        scale: {
                            x: 1,
                            y: 1,
                            z: 1
                        },
                        rotation: {
                            x: 0,
                            y: 0,
                            z: 0
                        }
                    },
                    geometry: {
                        size: {
                            x: 1,
                            y: 1,
                            z: 1
                        },
                        segments: {
                            x: 1,
                            y: 1,
                            z: 1
                        }
                    },
                    material: {
                        wireframe: true,
                        color: '#ff00ff',
                        opacity: 0.8
                    }
                }
            }
        ],
    addCube: (x, y, z, color) => set((state) => ({ cubes: [...state.cubes, cube] })),

    color: '#00ffff'
}))