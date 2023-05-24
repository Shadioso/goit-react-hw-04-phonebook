import { Form, Button, Label, Input } from './PhoneBook.styled';
import PropTypes from 'prop-types';

const PhoneBook = ({ SubmitForm, ChangeInput, options }) => {
  const { name, number } = options;
  return (
    <>
      <Form onSubmit={SubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={ChangeInput}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={ChangeInput}
          />
        </Label>

        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </>
  );
};

PhoneBook.propTypes = {
  options: PropTypes.object.isRequired,
};
export { PhoneBook };
