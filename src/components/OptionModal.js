import React from 'react'
import Modal from 'react-modal'

const OptionModal=(props)=>{
    
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="selected"
            onRequestClose={props.handleClearSelectedOption}
        >
            <h1>Selected</h1>
            {props.selectedOption && <p>{props.selectedOption}</p>} 
            
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )

}



export default OptionModal