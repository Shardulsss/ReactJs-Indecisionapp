import React from 'react'
import AddOption from './AddOptions'
import Options from './Options'
import Actions from './Actions'
import Header from './header'
import OptionModal from './OptionModal'



export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOne = this.handleRemoveOne.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
        this.state={
            options: [],
            selectedOption : undefined
            
        }
    }
    handleClearSelectedOption(){
        
        this.setState({
            selectedOption: undefined
        })
        
    }
    handlePick(){
        let ind = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[ind]
        this.setState(()=>{
            return {
                selectedOption : option,
            }
        })
        // alert(option)
         
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
        <OptionModal 
            selectedOption={this.state.selectedOption}  
            handleClearSelectedOption={this.handleClearSelectedOption}>
        </OptionModal>
        </div>
        
        
    }
}
