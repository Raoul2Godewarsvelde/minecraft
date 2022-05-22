import React from 'react'

const AddButton = ({ setState }) => {

    return (
        <button
            type='button'
            onClick={setState}
        >
            +
        </button>
    )
}

export default AddButton