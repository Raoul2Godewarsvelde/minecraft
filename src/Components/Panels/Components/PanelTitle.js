import React from 'react'

const PanelTitle = ({ title }) => {

    return (
        <div className='title_panel'>
            <h1>{title}</h1>
            <div className='close_panel'>Close</div>
        </div>
    )
}

export default PanelTitle