import React from 'react'

import { useEnvironmentStore } from '@hooks/useEnvironmentStore'

import { Color } from '@components/Inputs/Registration/index'

const EnvironmentController = () => {

    // HOOKS

    const [controlled_color, controlled_setColor] = useEnvironmentStore((state) => [
        state.controlled_color, state.controlled_setColor
    ])

    return (
        <div>
            <Color name={'color'} label={'Color'} value={controlled_color} state={controlled_color} setState={controlled_setColor} />
        </div>
    )
}

export default EnvironmentController