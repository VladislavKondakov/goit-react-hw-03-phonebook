import React from "react";
import PropTypes from 'prop-types';

class ContactList extends React.Component {
  handleDeleteContact = (id) => {
    this.props.onDeleteContact(id);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search contacts..."
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
        <ul>
          {this.props.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} ({contact.number})
              <button onClick={() => this.handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
