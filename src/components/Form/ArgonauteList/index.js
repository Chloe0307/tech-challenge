/* eslint-disable padded-blocks */
// Import NPM
import React from 'react';

import members from '../../../members';
// Import style
import './argonauteList.scss';

const ArgonauteList = () => {

  // eslint-disable-next-line no-console
  console.log(members);

  return (
    <div className="argonaute-content">
      <h2 className="argonaute-title">Membres de l'équipage</h2>
      <section className="member-list">
        {members.map((member) => (
          <div
            className="member-item"
            key={member.id}
          >
            {member.name}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArgonauteList;
