import React from 'react';
import PropTypes from 'react-proptypes';

const App = ({ children }) => (
  <div >
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;