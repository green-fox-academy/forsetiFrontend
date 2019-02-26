import React from 'react';
import PropTypes from 'prop-types';

const QustionComponent = ({ details }) => {
  return (
    <div>
      <p>{details ? details[0].value.topic : ''}</p>
    </div>
  );
};

QustionComponent.propTypes = {

};

export default QustionComponent;
