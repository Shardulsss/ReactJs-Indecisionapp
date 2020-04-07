import React from 'react'
const Actions = (props)=>{
    return <div>
        <button onClick={props.handlePick} disabled = {!props.handleDisabler}>What to do?</button>
        <button onClick={props.handleRemove} disabled = {!props.handleDisabler}>Remove all tasks</button>
        </div>
}

export default Actions