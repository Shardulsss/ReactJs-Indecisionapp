import React from 'react';
export default class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.taskinput.value.trim()
        console.log(option)
        const error = this.props.handleAddOption(option)
        if(!error){
            e.target.elements.taskinput.value=""
        }
        this.setState(()=>{
            return {
                error:error
            }
        })
        
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Enter task" name="taskinput"></input>
                    <button>Add Task</button>  
                </form>
            </div>
        )
    }
}