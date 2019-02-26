import React, { Component } from 'react';
import { Card, CardContent, Button, CardActions, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';


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
      <Card color="primary">
        ADD QUESTION:
        <CardContent>
          <TextField
            id="standard-name"
            name="text"
            label="text"
            value={this.state.text}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            name="body"
            label="body"
            value={this.state.body}
            onChange={this.handleChange}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button
            title={'ADD Question'}
            onClick={ () => {}
              // this.props.addQ({ text: this.state.text, body: this.state.body })
            }
          >
            <AddIcon >
              +
            </AddIcon>
          </Button>
        </CardActions>
      </Card >
    );
  }

}

const mapDispatchToProps = dispatch => ({
  // addQ: ({ text, body }) => dispatch(addQuestion({ text, body })),
});

export default connect(null, mapDispatchToProps)(NewQuestion);
