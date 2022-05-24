import React from 'react'

import '@styles/Components/Panels/Components/Buttons/add_button.scss'

const AddButton = ({ name, setState }) => {

    return (
        <button
            type='button'
            className='large_addButton__wrapper'
            onClick={setState}
        >
            {name}
        </button>
    )
}

export default AddButton