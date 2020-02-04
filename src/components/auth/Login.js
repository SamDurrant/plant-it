import React, { useState, useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';

// Context items
import { authContext } from '../../contexts/AuthContext';

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

function Login (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { classes } = props;
  const { userAuth, signIn } = useContext(authContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn(email, password);
  }

    return (
      userAuth ? (
        <Redirect to='/' />
      ) : (
        <Grid container className={classes.signIn} justify="center">
          <Grid item md={4} sm={6} xs={10}>
            <form className={classes.basicForm} onSubmit={handleSubmit}>
              <Typography variant="h4" className={classes.capsHeading}>Login</Typography>
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

export default withStyles(styles)(Login);