import './ContactForm.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
class ContactForm extends Component {
  //     constructor(props) {
  //         super();
  //         // props.onFormSubmit();

  // }F

  state = {
    id: '',
    name: '',
    number: '',
  };

  onHandleFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
    // return this.state;
  };

  onHandleInput = e => {
    const currentInput = e.target;
    this.setState({
      id: nanoid(),
      [currentInput.name]: currentInput.value,
    });
  };

  render() {
    return (
      <form
        action=""
        className="contactForm"
        onSubmit={this.onHandleFormSubmit}
      >
        <input
          type="text"
          className="contactInput"
          placeholder="Plase input your name"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onHandleInput}
        />
        <input
          type="tel"
          className="contactInput"
          placeholder="Please input your phone number"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onHandleInput}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;