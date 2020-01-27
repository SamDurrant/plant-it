import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';

// Redux items
import { connect } from 'react-redux';
import { doSignInWithEmailAndPassword } from '../../redux/actions/authActions';

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
    const userAccount = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.doSignInWithEmailAndPassword(userAccount);
  }

  render() {
    const { classes, authenticated } = this.props;
    return (
      authenticated ? (
        <Redirect to='/' />
      ) : (
        <Grid container className={classes.signIn} justify="center">
          <Grid item md={4} sm={6} xs={10}>
            <form className={classes.basicForm} onSubmit={this.handleSubmit}>
              <Typography variant="h4" className={classes.capsHeading}>Login</Typography>
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
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapActionsToProps = {
  doSignInWithEmailAndPassword
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login));