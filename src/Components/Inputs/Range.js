import React from 'react'

const Range = ({ name, label, value, min, max, step, handleChange }) => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px'
            }}
        >
            <label
                htmlFor='volume'
            >
                {label}
            </label>
            <input
                id={name}
                type='range'
                name={name}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default Range