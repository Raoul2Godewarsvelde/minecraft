import React from 'react'

const CheckBox = ({ name, label, value, setState, color }) => {

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
                type='checkbox'
                name={name}
                value={value}
                onChange={(e) => setState(e.target.checked)}
            />
        </div>
    )
}

export default CheckBox