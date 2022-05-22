import React from 'react'

import { useSceneStore } from '@hooks/useSceneStore'

import { AddButton } from '@components/Buttons/Registration/index'

const AddPrimitiveController = () => {

    // HOOKS

    const [addCube] = useSceneStore((state) => [
        state.addCube
    ])
    return (
        <>
            <h1>Add primitive</h1>
            <h2>Cube</h2>
            <AddButton setState={addCube} />
        </>
    )
}

export default AddPrimitiveController