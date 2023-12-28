import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  onHandleFilter = input => {
    this.setState({
      filter: input.currentTarget.value.toLowerCase(),
    });
  };

  filterContacts = () => {
    let filteredContacts = [];
    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase().includes(this.state.filter)) {
        filteredContacts.push(contact);
      }
    });

    return filteredContacts;
  };

  onHandleFormSubmit = contact => {
    for (let contactInState of this.state.contacts) {
      if (contact.name.toLowerCase() === contactInState.name.toLowerCase()) {
        return alert(`${contact.name} is already in the list.`);
      }
    }

    this.setState(prevState => {
      let updatedContacts = [...prevState.contacts];

      updatedContacts.push(contact);

      return { contacts: updatedContacts };
    });
  };
  deleteContact = contactName => {
    for (let contactInState of this.state.contacts) {
      if (contactName.toLowerCase() === contactInState.name.toLowerCase()) {
        return alert(`${contactName} is deleted.`);
      }
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onHandleFormSubmit} />
        <h1>Contacts</h1>
        <Filter input={this.onHandleFilter} />
        <Contacts
          contactsList={this.filterContacts()}
          onDelete={this.deleteContact}
        ></Contacts>
      </div>
    );
  }
}

export default App;
