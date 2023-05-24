import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Name, Number, Message } from './ContactList.styled';
const ContactList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <button data-id={id} onClick={onRemove}>
              Delete
            </button>
          </Item>
        ))
      ) : (
        <Message>Your contact list is empty</Message>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export { ContactList };
