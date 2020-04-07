class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.state={
            options: []
        }
    }
    handlePick(){
        let ind = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[ind])
         
    }
    handleRemoveAll(){
        console.log(this.state.options)
        this.setState(()=>{
            
            return {
                options:[]
            }
        })
    }
    handleRemoveOne(optiontorem){
        
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((option)=>{
                    return option!==optiontorem
                })
            }
        })
    }
    handleAddOption(option){
        if(!option){
            return "no value"
            
        }
        else if(this.state.options.indexOf(option)>-1){
            return "task already exists"
            
        }
        
        this.setState((prevState)=>{

            return{
                options:prevState.options.concat(option)
            }
        })
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options') 
            const options = JSON.parse(json)
            if(options){
            this.setState(()=>({ options }))
        }
        console.log("mounted")
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const options = this.state.options
            const json = JSON.stringify(options)
            localStorage.setItem('options',json)
        }
        console.log("saved to local storage")
    }

    render(){
        const title = "Indecision App"
        const subtitle = "Lets orginize your day"
        return <div>
        <Header title={title} sub={subtitle}/>
        <Actions 
            handleRemove={this.handleRemoveAll} 
            handlePick={this.handlePick} 
            handleDisabler={this.state.options.length>0}
            />
        <br></br>
        <Options 
            options = {this.state.options}
            handleRemoveOne = {this.handleRemoveOne}
            />
        <br></br>
        <AddOption 
            handleAddOption = {this.handleAddOption}
        />
        </div>
        
        
    }
}
const Header = (props)=>{
    
        return <div>
        kk
        <h1>{props.title}</h1>
        <h2>{props.sub}</h2>
        </div>
    
}

// class Header extends React.Component{
//     render(){
//         return <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.sub}</h2>
//         </div>
//     }
// }

const Actions = (props)=>{
    return <div>
        <button onClick={props.handlePick} disabled = {!props.handleDisabler}>What to do?</button>
        <button onClick={props.handleRemove} disabled = {!props.handleDisabler}>Remove all tasks</button>
        </div>
}
// class Actions extends React.Component{
//     render(){
//         return <div>
//         <button onClick={this.props.handlePick} disabled = {!this.props.handleDisabler}>What to do?</button>
//         <button onClick={this.props.handleRemove} disabled = {!this.props.handleDisabler}>Remove all tasks</button>
//         </div>
//     }
// }
const Options = (props)=>{
    return <div>
        {props.options.length==0 && <p>Enter some tasks </p>}
        {props.options.map((option)=><Option key={option} Task = {option} handleRemoveOne={props.handleRemoveOne}/>)}
        </div>
}
// class Options extends React.Component{
//     render(){
//         return <div>
//         {this.props.options.map((option)=><Option key={option} Task = {option} />)}
//         </div>
//     }
// }

const Option = (props)=>{
    return(
        <div>
            Task : {props.Task}
            <button onClick={(e)=>props.handleRemoveOne(props.Task)}>Remove</button>
        </div>)
}
// class Option extends React.Component{
//     render(){
//         return(<div>Task : {this.props.Task}</div>)
        
//     }
// }

class AddOption extends React.Component{
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

// let options=[]
// const formsubmit=(e)=>{
//     e.preventDefault()
//     const option = e.target.elements.task.value
//     if(option){
//         options.push(option)
//         e.target.elements.task.value = "";
//         render()
//     }
// }

// const removetasks = ()=>{
//     options=[]
//     render()
// }

// const whattodo = ()=>{
//     let ind = Math.floor(Math.random()*options.length)
//     alert(options[ind])
// }

// const temp = document.getElementById('temp')
// const render = ()=>{
//     const template = 
//     <div>
//         <h1>Indecision App</h1>
//         <form onSubmit={formsubmit}>
//             <input type="text" name="task" placeholder="enter your task" focusable></input>
//             <button>Add Task</button>
//         </form>

//         <ol>
//             {options.map((option)=><li key={option}>{option}</li>)}
//         </ol>
//         <button disabled={options.length==0?true:false} onClick={whattodo}>What should i do?</button>
//         <button disabled={options.length==0?true:false} onClick={removetasks}>Remove all Tasks</button>
//     </div> 
//     const temp = document.getElementById('temp')

//     ReactDOM.render(template,temp)
// }
// render()

ReactDOM.render(<IndecisionApp/>,temp)