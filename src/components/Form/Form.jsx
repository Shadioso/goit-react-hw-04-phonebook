import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);
  const state = {
    name,
    number,
  };

  const SubmitForm = evt => {
    evt.preventDefault();
    onSubmit({ ...state, id: nanoid() });
    setName(``);
    setNumber(``);
  };

  const ChangeInput = evt => {
    const { name } = evt.target;
    switch (name) {
      case `name`:
        setName(evt.target.value);
        break;
      case `number`:
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <PhoneBook
      SubmitForm={SubmitForm}
      ChangeInput={ChangeInput}
      options={state}
    />
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};
export { Form };
