import React from 'react'

const Range = ({ rangeType, name, label, value, min, max, step, state, setState, color }) => {

    // RANGE TYPE

    let handleChange

    switch(rangeType) {
        case 'value':
            handleChange = (e) => {
                setState(e.target.value)
            }
            break
        case 'object':
            handleChange = (e) => {
                const state_copy = state
                state_copy[name] = e.target.value
                setState(state_copy)
            }
            break
        default:
            break
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px'
            }}
        >
            <label
                style={{color: color}}
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
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default Range