import React from 'react';

const AddButton = ({ what, openModal }) => {

  return (
  <button
    className="btn btn-primary btn-lg"
    onClick={openModal}
  >Add {what}</button>
  );

};

export default AddButton;