import create from 'zustand'

export const usePlaneStore = create((set) => ({
    controlled_position: {x: 0, y: 0, z: 0},
    controlled_setPosition: (controlled_position) => set((state) => ({ controlled_position: ({ x: controlled_position.x, y: controlled_position.y, z: controlled_position.z }) })),

    controlled_size: {x: 1, y: 1},
    controlled_setSize: (controlled_size) => set((state) => ({ controlled_size: ({ x: controlled_size.x, y: controlled_size.y }) })),

    controlled_segments: {x: 1, y: 1},
    controlled_setSegments: (controlled_segments) => set((state) => ({ controlled_segments: ({ x: controlled_segments.x, y: controlled_segments.y }) })),

    controlled_scale: {x: 1, y: 1},
    controlled_setScale: (controlled_scale) => set((state) => ({ controlled_scale: ({ x: controlled_scale.x, y: controlled_scale.y }) })),

    controlled_rotation: {x: 0, y: 0, z: 0},
    controlled_setRotation: (controlled_rotation) => set((state) => ({ controlled_rotation: ({ x: controlled_rotation.x, y: controlled_rotation.y, z: controlled_rotation.z }) })),
    
    controlled_opacity: 0.50,
    controlled_setOpacity: (controlled_opacity) => set((state) => ({ controlled_opacity: controlled_opacity })),

    controlled_wireframe: false,
    controlled_setWireframe: (controlled_wireframe) => set((state) => ({ controlled_wireframe: controlled_wireframe }))
}))