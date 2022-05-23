import create from 'zustand'

import CUBE from '@json/Components/Primitives/cube'

console.log('CUBE', CUBE)

/* const cube_default_values = JSON.parse(CUBE) */

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useSceneStore = create((set) => ({
    objectSelected: null,
    setObjectSelected: (objectSelected) => set((state) => ({ objectSelected: objectSelected })),

    saveWorld: () => set((state) => {
        console.log('cubes', state.cubes)
        setLocalStorage('world', state.cubes)
    }),

    cubes: getLocalStorage('world') || 
        [
            {
                state: {
                    key: null,
                    name: 'stored_cube',
                    transform: {
                        position: {
                            x: -2,
                            y: 0,
                            z: -2
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
                        wireframe: false,
                        color: '##ff00ff',
                        opacity: 1
                    }
                }
            }
        ],
    addCube: (x, y, z, color) => set((state) => ({ cubes: [...state.cubes, { 
        state: {
            key: null,
            name: 'added_cube',
            transform: {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
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
                wireframe: false,
                color: '#fe54af',
                opacity: 1
            }
        }
    }] })),

    color: '#00ffff'
}))