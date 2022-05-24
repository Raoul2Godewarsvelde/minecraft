import React from 'react'

const Color = ({ name, label, value, setState }) => {

    return (
        <div
            className='input__wrapper'
        >
            <input
                id={name}
                type='color'
                name={name}
                value={value}
                onChange={(e) => setState(e.target.value)}
            />
            {label && (
                <label
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Color