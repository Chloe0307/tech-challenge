/* eslint-disable jsx-a11y/label-has-associated-control */
// Imports NPM
import React from 'react';

// Import component
import ArgonauteList from 'src/components/Form/ArgonauteList';

// Import SCSS
import './form.scss';

const Form = () => (
  <main className="main-content">
    <h2 className="add-argonaute-title">Ajouter un(e) Argonaute</h2>
    <form className="new-member-form">
      <label className="label-name" htmlFor="name">
        Nom de l&apos;Argonaute
      </label>
      <input className="input-name-argonaute" id="name" name="name" type="text" placeholder="Charalampos" />
      <button className="add-button" type="submit">Envoyer</button>
    </form>
    <ArgonauteList />
  </main>
);

export default Form;
