import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import InterviewQuestions from "./InterviewQuestions";
import ReactDOM from "react";
// import Slider from './slider';
import {Animated} from "react-animated-css";
import Modal from "../../node_modules/react-bootstrap-modal";
// var Modal = require('../../node_modules/react-bootstrap-modal');

class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          people: []
     };

     
  render()=>{
    let closeModal = () => this.setState({ open: false });
 
    let saveAndClose = () => {
      api.saveData()
        .then(() => this.setState({ open: false }))
    };
 
    return (
      <div>
        <button type='button'>Launch modal</button>
 
        <Modal
          show={this.state.open}
          onHide={closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <InterviewQuestions/>
          </Modal.Body>
          <Modal.Footer>
          
            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

            <button className='btn btn-primary' onClick={saveAndClose}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
        )
        }
    }
}
 export default Journal;
// ReactDOM.render(<Journal/>, document.body);



// function Journal(){
// return(
// <div>
//     <p>Date:11/27</p>
//     <p>Topic:Interview Questions</p>    
// <Row><InterviewQuestions/></Row>
// </div>

// )





// }
// export default Journal;