import React from 'react';
import history from '../history';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const TopicItem = ({ topic }) => (
  <div>
   <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          { topic }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Questions</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  </div>
);

export default TopicItem;