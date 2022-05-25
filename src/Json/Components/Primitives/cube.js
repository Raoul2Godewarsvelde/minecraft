const cube = {
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
            wireframe: false,
            color: '#ffff00',
            opacity: 0.8
        }
    }
}

export default cube