import create from 'zustand'

import CUBE from '@json/Components/Primitives/cube'

console.log('CUBE', CUBE)

export const useCubeStore = create((set) => ({
    key: null,

    controlled_position: CUBE.position,
    controlled_setPosition: (controlled_position) => set((state) => ({ controlled_position: ({ x: controlled_position.x, y: controlled_position.y, z: controlled_position.z }) })),
    
    controlled_scale: CUBE.scale,
    controlled_setScale: (controlled_scale) => set((state) => ({ controlled_scale: ({ x: controlled_scale.x, y: controlled_scale.y, z: controlled_scale.z }) })),

    controlled_rotation: CUBE.rotation,
    controlled_setRotation: (controlled_rotation) => set((state) => ({ controlled_rotation: ({ x: controlled_rotation.x, y: controlled_rotation.y, z: controlled_rotation.z }) })),

    controlled_size: CUBE.size,
    controlled_setSize: (controlled_size) => set((state) => ({ controlled_size: ({ x: controlled_size.x, y: controlled_size.y, z: controlled_size.z }) })),

    controlled_segments: CUBE.segments,
    controlled_setSegments: (controlled_segments) => set((state) => ({ controlled_segments: ({ x: controlled_segments.x, y: controlled_segments.y, z: controlled_segments.z }) })),

    controlled_wireframe: CUBE.wireframe,
    controlled_setWireframe: (controlled_wireframe) => set((state) => ({ controlled_wireframe: controlled_wireframe })),
    
    controlled_color: CUBE.color,
    controlled_setColor: (controlled_color) => set((state) => ({ controlled_color: controlled_color })),
    
    controlled_opacity: CUBE.opacity,
    controlled_setOpacity: (controlled_opacity) => set((state) => ({ controlled_opacity: controlled_opacity }))
}))