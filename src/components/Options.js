import React from 'react'
import Option from './Option'
const Options = (props)=>{
    return <div>
        <h3 className="widget-header">your options</h3>
        {props.options.length==0 && <p className="widget-message">Enter some tasks </p>}
        {props.options.map((option,index)=><Option key={option} count={index+1} Task = {option} handleRemoveOne={props.handleRemoveOne}/>)}
        </div>
}
export default Options