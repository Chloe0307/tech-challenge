/* eslint-disable jsx-a11y/label-has-associated-control */
// Imports NPM
import React, { useState } from 'react';

// Import component
import ArgonauteList from 'src/components/Form/ArgonauteList';

// Import datas files
import members from '../../members';

// Import SCSS
import './form.scss';

const Form = () => {
  // const [id, setId] = useState(1);
  const [firstname, setFirstname] = useState('');

  const handleChange = (event) => {
    getFirstname(event.currentTarget.value);
  };

  return (
    <main className="main-content">
      <h2 className="add-argonaute-title">Ajouter un(e) Argonaute</h2>
      <form
        className="new-member-form"
        // onSubmit={handleSubmit}
      >
        <label
          className="label-name"
          htmlFor="name"
        >
          Nom de l&apos;Argonaute
        </label>
        <input
          className="input-name-argonaute"
          // key={id}
          value={firstname}
          name="firstname"
          type="text"
          placeholder="Charalampos"
          onChange={handleChange}
        />
        <button
          className="add-button"
          type="submit"
        >
          Valider
        </button>
      </form>
      <ArgonauteList />
    </main>
  );
};

// Form.propTypes = {
//   firstname: PropTypes.string.isRequired,
// };

export default Form;
