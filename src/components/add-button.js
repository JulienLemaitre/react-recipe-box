import React from 'react';

const AddButton = ({ what, openModal }) => {

  return (
  <button
    onClick={openModal}
  >Add {what}</button>
  );

};

export default AddButton;