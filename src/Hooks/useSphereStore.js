import create from 'zustand'

export const useSphereStore = create((set) => ({
    controlled_position: {x: 0, y: 0, z: 0},
    controlled_setPosition: (controlled_position) => set((state) => ({ controlled_position: ({ x: controlled_position.x, y: controlled_position.y, z: controlled_position.z }) })),

    controlled_radius: 1,
    controlled_setRadius: (controlled_radius) => set((state) => ({ controlled_radius: controlled_radius })),

    controlled_segments: {lat: 12, long: 12},
    controlled_setSegments: (controlled_segments) => set((state) => ({ controlled_segments: ({ lat: controlled_segments.lat, long: controlled_segments.long }) })),

    controlled_scale: {x: 1, y: 1, z: 1},
    controlled_setScale: (controlled_scale) => set((state) => ({ controlled_scale: ({ x: controlled_scale.x, y: controlled_scale.y, z: controlled_scale.z }) })),

    controlled_rotation: {x: 0, y: 0, z: 0},
    controlled_setRotation: (controlled_rotation) => set((state) => ({ controlled_rotation: ({ x: controlled_rotation.x, y: controlled_rotation.y, z: controlled_rotation.z }) })),
    
    controlled_opacity: 0.50,
    controlled_setOpacity: (controlled_opacity) => set((state) => ({ controlled_opacity: controlled_opacity })),

    controlled_wireframe: false,
    controlled_setWireframe: (controlled_wireframe) => set((state) => ({ controlled_wireframe: controlled_wireframe }))
}))