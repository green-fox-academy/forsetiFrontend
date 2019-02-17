import React from 'react';
import { CardHeader } from '@material-ui/core';

const CardTitle = ({ details: { text, body } }) => (
  <CardHeader title={text} subheader={body} />);

export default CardTitle;
