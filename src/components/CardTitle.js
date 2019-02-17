import React from 'react';

const CardTitle = ({ details: { text, body } }) => {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{body}</h2>
    </div>
  );
};

export default CardTitle;
