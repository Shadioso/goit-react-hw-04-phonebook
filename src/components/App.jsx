import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Wrapper, Title } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(`contacts`)) ?? []
  );
  const [filter, setFilter] = useState(``);
  const params = {
    filter,
    contacts,
  };

  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contactList = localStorage.getItem(`contacts`);
    const parsedList = JSON.parse(contactList);
    if (parsedList) {
      setContacts(parsedList);
    }
  }, []);

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const onSubmit = data => {
    setContacts(prevState => {
      if (prevState.find(({ name }) => name === data.name)) {
        alert(`${data.name} is already in contacts`);
        return prevState;
      }
      return [data, ...prevState];
    });
  };

  const filteredContacts = () => {
    const { contacts, filter } = params;
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const removeContact = e => {
    setContacts(contacts => {
      const idx = contacts.findIndex(
        contact => contact.id === e.target.dataset.id
      );
      return contacts.splice(idx, 1);
    });
  };
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={onSubmit} />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts()} onRemove={removeContact} />
    </Wrapper>
  );
};
