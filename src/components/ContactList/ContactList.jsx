import React from 'react';
import PropTypes from 'prop-types';

import '../ContactList/ContactList.css';

export const ContactList = ({ contacts, children, deleteContact }) => {
  return (
    <div className='contacts'>
      <h2>Contacts</h2>
      {children}
      <ul className='contacts__list'>
        {contacts.map(({ id, name, number }) => (
          <li className='contacts__item' key={id}>
            <p className='contacts__name'>{name}</p>
            <p className='contacts__number'> {number}</p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
              className='contacts__btn'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};