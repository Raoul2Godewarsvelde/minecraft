import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'
import { useEnvironmentStore } from '@hooks/useEnvironmentStore'

import {
    Color,
    File,
    Range
} from '@components/Panels/Components/Inputs/Registration/index'

const EnvironmentController = () => {

    // HOOKS

    const [
        environment, setIsCollapse_Environment
    ] = useInterfaceStore((state) => [
        state.environment, state.setIsCollapse_Environment
    ])

    const [
        color, setColor,
        texture, setTexture,
        strength, setStrength
    ] = useEnvironmentStore((state) => [
        state.color, state.setColor,
        state.texture, state.setTexture,
        state.strength, state.setStrength
    ])

    return (
        <div className='controller__wrappers'>
            <h1
                onClick={setIsCollapse_Environment}
            >
                Environment
            </h1>
            {!environment.isCollapse && (
                <>
                    <Color name={'environment_color'} label={'Color'} value={color} state={color} setState={setColor} />
                    <File name={'environment_texture'} label={'Background texture'} value={texture} state={texture} setState={setTexture} />
                    <Range rangeType={'value'} name={'environment_strength'} label={'Strength'} value={strength} min={0} max={1} step={0.001} state={strength} setState={setStrength} />
                </>
            )}
        </div>
    )
}

export default EnvironmentController