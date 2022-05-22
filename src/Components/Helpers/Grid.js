import React from 'react'

import { Plane } from '@components/Meshes/Primitives/Registration/index'

const Grid = () => {

    return (
        <>
            <Plane controlled={false} position={{x: 0, y: 0, z: 8}} rotation={{x: 0, y: 0, z: 0}} scale={{x:1, y:1}} size={{x: 10, y: 10}} segments={{x: 10, y: 10}} wireframe={true} opacity={1} />
        </>
    )
}

export default Grid