import { Component } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import '../ContactForm/ContactForm.css';

export class ContactForm extends Component {

  handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    addContact({ id: nanoid(), name, number });
    event.target.reset();
  };

  render() {
    return (
      <section className='form'>
        <h1 className='form__title'>Phonebook</h1>
        <form className='form__container' onSubmit={this.handleFormSubmit}>
          <label className='form__label'>Name</label>
          <input
            type='text'
            name='name'
            className='form__input'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder='Enter name'
            required
          />
          <label className='form__label'>Number</label>
          <input
            type='tel'
            name='number'
            className='form__input'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            placeholder='Enter phone number'
            required
          />
          <button className='form__btn' type='submit'>
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  addContact: PropTypes.func.isRequired,
};