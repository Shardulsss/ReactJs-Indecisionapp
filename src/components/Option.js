import React from 'react'
const Option = (props)=>{
    return(
        <div>
            Task : {props.Task}
            <button onClick={(e)=>props.handleRemoveOne(props.Task)}>Remove</button>
        </div>)
}
 
export default Option