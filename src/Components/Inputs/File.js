import React from 'react'

const File = ({ name, label, value, setState }) => {
    
    return (
        <div
            className='input__wrapper'
        >
            <input
                type='file'
                id={name}
                name={name}
                accept='image/png, image/jpeg'
                value={value}
                onChange={setState}
            />
            <label
                for={name}
            >
                {label}
            </label>
        </div>
    )
}

export default File