import React, { Component } from 'react';
import Modal from 'react-modal';


export default function VaccineDialog(props) {
  return(
      
    <div className="modal">
        <Modal
            isOpen={ props.isOpen }
            contentLabel="Example Modal" >
            <h1>Modal Screen</h1>
            <button onClick={props.toggle}>close</button>
        </Modal>  
    </div>     
    )
}