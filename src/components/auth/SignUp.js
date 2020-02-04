import React, { useState, useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';

import { authContext } from '../../contexts/AuthContext';

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

function SignUp (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const { classes } = props;  
  const { userAuth, signUp } = useContext(authContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    signUp(email, password, firstName, lastName)
  }

  const isInvalid =
    password !== confirmPassword ||
    password === '' ||
    email === '' ||
    firstName === '' ||
    lastName === '';

  return (
    userAuth ? (
      <Redirect to='/' />
    ) : (
      <Grid container className={classes.signUp} justify="center">
        <Grid item md={4} sm={6} xs={10}>
          <form className={classes.basicForm} onSubmit={handleSubmit}>
            <Typography variant="h4" className={classes.capsHeading}>Sign Up</Typography>
            <TextField 
              className={classes.textField}
              id="email" 
              type="email"
              label="Email" 
              variant="outlined" 
              color="secondary"
              onChange={e => setEmail(e.target.value)}/>
            <TextField 
              className={classes.textField}
              id="password"
              type="password" 
              label="Password" 
              variant="outlined"
              color="secondary" 
              onChange={e => setPassword(e.target.value)}/>
            <TextField 
              className={classes.textField}
              id="confirmPassword"
              type="password" 
              label="Confirm Password" 
              variant="outlined"
              color="secondary" 
              onChange={e => setConfirmPassword(e.target.value)}/>
            <TextField 
              className={classes.textField}
              id="firstName"
              type="text" 
              label="First Name" 
              variant="outlined"
              color="secondary" 
              onChange={e => setFirstName(e.target.value)}/>
            <TextField 
              className={classes.textField}
              id="lastName"
              type="text" 
              label="Last Name" 
              variant="outlined"
              color="secondary" 
              onChange={e => setLastName(e.target.value)}/>
            <Button 
              disabled={isInvalid}
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

export default withStyles(styles)(SignUp);