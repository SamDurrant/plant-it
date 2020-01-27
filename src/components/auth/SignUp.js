import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';

// Redux items
import { connect } from 'react-redux';
import { createNewUser } from '../../redux/actions/authActions';

// MUI items
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  signUp: {
    paddingTop: 150,
    minHeight: '100vh'
  }
})

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  render() {
    const { classes, authenticated } = this.props;
    return (
      authenticated ? (
        <Redirect to='/' />
      ) : (
        <Grid container className={classes.signUp} justify="center">
          <Grid item md={4} sm={6} xs={10}>
            <form className={classes.basicForm} onSubmit={this.handleSubmit}>
              <Typography variant="h4" className={classes.capsHeading}>Sign Up</Typography>
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
              <TextField 
                className={classes.textField}
                id="firstName"
                type="text" 
                label="First Name" 
                variant="outlined"
                color="secondary" 
                onChange={this.handleChange}/>
              <TextField 
                className={classes.textField}
                id="lastName"
                type="text" 
                label="Last Name" 
                variant="outlined"
                color="secondary" 
                onChange={this.handleChange}/>
              <Button 
                className={classes.submitBtn}
                type="submit"
                variant="contained" 
                color="secondary">Sign Up</Button>
            </form>
          </Grid>
        </Grid>
      )
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapActionsToProps = {
  createNewUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SignUp));