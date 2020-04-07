import React from 'react'
const Header = (props)=>{
    
    return <div className = "header">
   
    <h1 className="header_title">{props.title}</h1>
    <h2 className="header_sub">{props.sub}</h2>
    </div>

}
export default Header