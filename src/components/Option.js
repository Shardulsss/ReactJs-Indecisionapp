import React from 'react'
const Option = (props)=>{
    return(
        
        <div>
            
            <div className="widget-option">
                <div className="widget-option-message">{props.count} : {props.Task}</div>
                <button className="button" onClick={(e)=>props.handleRemoveOne(props.Task)}>Remove</button>
            </div>
            
        </div>)
}
 
export default Option