import React from 'react'

const Color = ({ name, label, value, setState, color }) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px'
            }}
        >
            {label && (
                <label
                    style={{color: color}}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                type='color'
                name={name}
                value={value}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    )
}

export default Color