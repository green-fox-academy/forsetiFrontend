import React from 'react';
import history from '../history';

export default function NPS() {
  const location = history.location;
  return (
    <div>
      {`NPS NOT YET INPLEMENTED on${location.pathname}`}
    </div>
  );
}
