import React from 'react'
const Actions = (props)=>{
    return <div>
        <button className="big-button" onClick={props.handlePick} disabled = {!props.handleDisabler}>What to do?</button>
        <button className="big-button2" onClick={props.handleRemove} disabled = {!props.handleDisabler}>Remove all</button>
        </div>
}

export default Actions