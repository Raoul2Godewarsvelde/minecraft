import React from 'react'

import { useSceneStore } from '@hooks/useSceneStore'

import { AddButton } from '@components/Buttons/Registration/index'

const AddPrimitiveController = () => {

    // HOOKS

    const [addCube, resetWorld] = useSceneStore((state) => [
        state.addCube,
        state.resetWorld
    ])

    // ADD CUBE

    /* const addCube = () => {

    } */

    // RETURN

    return (
        <>
            <h1>Add primitive</h1>
            <h2>Cube</h2>
            <AddButton setState={addCube} />
            <AddButton setState={resetWorld} />
        </>
    )
}

export default AddPrimitiveController