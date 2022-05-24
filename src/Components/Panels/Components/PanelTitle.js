import React from 'react'

const PanelTitle = ({ id, title }) => {

    return (
        <div id={id} className='title_panel'>
            <h1>{title}</h1>
            <div className='close_panel'>Close</div>
        </div>
    )
}

export default PanelTitle