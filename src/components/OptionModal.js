import React from 'react'
import Modal from 'react-modal'

const OptionModal=(props)=>{
    
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="selected"
            onRequestClose={props.handleClearSelectedOption}
            className="modal"
            closeTimeoutMS={200}
        >
            <h2 >Selected</h2>
            {props.selectedOption && <h3>{props.selectedOption}</h3>} 
            
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )

}



export default OptionModal