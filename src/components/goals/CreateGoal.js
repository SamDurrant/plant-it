import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  createGoal: {
    paddingTop: 150,
    minHeight: '100vh'
  }
})

class CreateGoal extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const newGoal = {
      title: this.state.title,
      content: this.state.content
    }
    e.preventDefault();
    console.log(newGoal);
  }
  
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.createGoal} justify="center">
        <Grid item md={4} sm={6} xs={10}>
          <form className={classes.basicForm} onSubmit={this.handleSubmit}>
            <Typography variant="h4" className={classes.capsHeading}>Create Goal</Typography>
            <TextField 
              className={classes.textField}
              id="title" 
              type="text"
              label="Title" 
              variant="outlined" 
              color="secondary"
              onChange={this.handleChange}/>
            <TextField 
              className={classes.textField}
              id="content"
              type="text" 
              label="Content" 
              multiline
              rows="5"
              variant="outlined"
              color="secondary" 
              onChange={this.handleChange}/>
            <Button 
              className={classes.submitBtn}
              type="submit"
              variant="contained" 
              color="secondary">Create</Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateGoal);