import React from  'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal (props){
    if (!props.modalIsOpen){
        return null;
    }
    return(
        /* ReactDOM.createPortal(<h1>Modal</h1>,
        document.getElementById('modal')) */
        ReactDOM.createPortal(
            <div className="modalcss">
                <div className="modal-container">
                    <button onClick={props.onClose}
                     className="modal_close_button"> X </button>
                    {props.children}
                </div>
            </div>,
        document.getElementById('modal'))
    )
} 

export default Modal;
