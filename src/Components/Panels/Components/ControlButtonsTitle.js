import React from 'react'

import { CloseIcon } from '@mui/icons-material'

import { ControlButton } from '@components/Panels/Components/Registration/index'

const ControlButtonsTitle = () => {

    return (
        <>
            <ControlButton icon={CloseIcon} />
            <ControlButton icon={CloseIcon} />
        </>
    )
}

export default ControlButtonsTitle