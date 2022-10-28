import React, { Component } from 'react';
import Modal from './UI/Modal'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false
    }
  }

  modalOpen = () => {
    this.setState({ displayModal: true });
  };

  modalClose = () => {
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <div className="container">
        <a onClick={this.modalOpen} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
        <Modal
          show={this.state.displayModal}
          modalClosed={this.modalClose}
        >
          <React.Fragment>
            <h3>This is a Sexy modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima non architecto doloribus earum nihil.</p>
            <button class="btn waves-effect waves-light" onClick={this.modalClose}>Submit</button>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

export default App;
