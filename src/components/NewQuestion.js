import React, { Component } from 'react';
import { Card, CardContent, Button, CardActions } from '@material-ui/core';

import { connect } from 'react-redux';
import { addQuestion } from '../actions/question';


class NewQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      body: '',
    };
    this.handleChange = (event) => {
      const { target: { name, value } } = event;
      this.setState({ [name]: value });
    };
  }

  render() {
    return (
      <Card style={{ backgroundColor: 'green' }}>
        ADD QUESTION:
        <CardContent>
          TEXT:<input name="text" type="text" onChange={this.handleChange}></input>
          BODY:<input name="body" type="text" onChange={this.handleChange}></input>
        </CardContent>
        <CardActions>
          <Button
            style={{ justifyContent: "center", width: '100%' }}
            title={'ADD Question'}
            onClick={() =>
              this.props.addQ({ text: this.state.text, body: this.state.body })
            }>
            ADD QUESTION
            </Button>
        </CardActions>
      </Card >
    );
  }

}

const mapDispatchToProps = dispatch => ({
  addQ: ({ text, body }) => dispatch(addQuestion({ text, body })),
});


export default connect(null, mapDispatchToProps)(NewQuestion);
