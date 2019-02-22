import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import { createStyles, CardActionArea } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


const styles = createStyles({
  cardLayout: {
    display: 'flex',
    width: '100%',
  },
  header: {
    fontSize: '3rem',
  },
  body: {
    fontSize: '2rem',
  },
  deleteButton: {
    width: 30,
    height: 30,
    backgroundColor: red[500]
  }
});

const QuestionItem = ({ question }) => (
  <div>
    <Card style={styles.cardLayout}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom style={styles.header}>
          {question.text}
        </Typography>
        <Typography color="textSecondary" gutterBottom style={styles.body}>
          {question.body}
        </Typography>
      </CardContent>
      <CardActionArea style={styles.deleteButton}>
        <Delete />
      </CardActionArea>
    </Card>
  </div>
);

export default QuestionItem;