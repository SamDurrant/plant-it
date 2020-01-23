import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  signIn: {
    paddingTop: 150,
    minHeight: '100vh'
  }
})

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.signIn} justify="center">
        <Grid item md={4} sm={6} xs={10}>
          <form className={classes.basicForm} onSubmit={this.handleSubmit}>
            <Typography variant="h4" className={classes.capsHeading}>Sign In</Typography>
            <TextField 
              className={classes.textField}
              id="email" 
              type="email"
              label="Email" 
              variant="outlined" 
              color="secondary"
              onChange={this.handleChange}/>
            <TextField 
              className={classes.textField}
              id="password"
              type="password" 
              label="Password" 
              variant="outlined"
              color="secondary" 
              onChange={this.handleChange}/>
            <Button 
              className={classes.submitBtn}
              type="submit"
              variant="contained" 
              color="secondary">Login</Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login);