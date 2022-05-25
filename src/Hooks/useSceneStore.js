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
            /* {
                state: {
                    id: 0,
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
            } */
        ],
    addCube: () => set((state) => ({ cubes: [...state.cubes, {
        state: {
            id: state.cubes.length - 1,
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
                wireframe: false,
                color: '#ffff00',
                opacity: 0.8
            }
        }
    }] })),
    
    setKey: (id) => set((state) => ({ id: id })),

    setName: (name) => set((state) => ({ name: name })),

    controlled_setPosition: (cube) => set((state) => ({ controlled_position: ({ x: cube.state.transform.x, y: cube.state.transform.y, z: cube.state.transform.z }) })),
    
    /* controlled_setScale: (controlled_scale) => set((state) => ({ controlled_scale: ({ x: controlled_scale.x, y: controlled_scale.y, z: controlled_scale.z }) })),

    controlled_setRotation: (controlled_rotation) => set((state) => ({ controlled_rotation: ({ x: controlled_rotation.x, y: controlled_rotation.y, z: controlled_rotation.z }) })),

    controlled_setSize: (controlled_size) => set((state) => ({ controlled_size: ({ x: controlled_size.x, y: controlled_size.y, z: controlled_size.z }) })),

    controlled_setSegments: (controlled_segments) => set((state) => ({ controlled_segments: ({ x: controlled_segments.x, y: controlled_segments.y, z: controlled_segments.z }) })),

    controlled_setWireframe: (controlled_wireframe) => set((state) => ({ controlled_wireframe: controlled_wireframe })),
    
    controlled_setColor: (controlled_color) => set((state) => ({ controlled_color: controlled_color })),
    
    controlled_setOpacity: (controlled_opacity) => set((state) => ({ controlled_opacity: controlled_opacity })), */

    color: '#00ffff'
}))