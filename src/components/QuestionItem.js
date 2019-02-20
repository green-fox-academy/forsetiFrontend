import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const QuestionItem = ({ question }) => (
  <div>
   <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          { question.text }
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          { question.body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  </div>
);

export default QuestionItem;