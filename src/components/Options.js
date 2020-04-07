import React from 'react'
import Option from './Option'
const Options = (props)=>{
    return <div>
        {props.options.length==0 && <p>Enter some tasks </p>}
        {props.options.map((option)=><Option key={option} Task = {option} handleRemoveOne={props.handleRemoveOne}/>)}
        </div>
}
export default Options