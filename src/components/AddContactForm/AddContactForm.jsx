import React from "react";
import { nanoid } from 'nanoid'

import { Button } from "./AddContactForm.styled";


class AddContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  }

  handleNameChange = event => {
    this.setState({name: event.currentTarget.value});
  }

 handleNumberChange = event => {
  const number = event.currentTarget.value.replace(/\D/g, '');
  this.setState({ number });
}



  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    };
    this.props.onAddNewContact(newContact);
    this.setState({ 
      name: '', 
      number: '' 
    });
  }

  render() {
    return (
     
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </label>
        <Button type="submit">Add Contact</Button>
        </form>
      
    );
  }
}

export default AddContactForm;
