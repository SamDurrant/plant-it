import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import flow from '../../images/flow.svg';
import fresh from '../../images/fresh.svg';
import green from '../../images/green.svg';
import love from '../../images/love.svg';
import peace from '../../images/peace.svg';

// Redux items
import { connect } from 'react-redux';
import { createGoal } from '../../redux/actions/goalActions';

// MUI items
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = (theme) => ({
  ...theme.spreadThis,
  createGoal: {
    paddingTop: 150,
    minHeight: '100vh'
  },
  bordered: {
    border: '1px solid red'
  }
})

const goalTypes = [
  {
    value: 'flow',
    src: flow,
  },
  {
    value: 'fresh',
    src: fresh
  },
  {
    value: 'green',
    src: green
  },
  {
    value: 'love',
    src: love
  },
  {
    value: 'peace',
    src: peace
  }
]


const timeSpans = [
  {
    name: 'every day',
    value: 1
  },
  {
    name: 'every week',
    value: 7
  },
  {
    name: 'in 3 months',
    value: 90
  },
  {
    name: 'in a year',
    value: 365
  },
  {
    name: 'in the future',
    value: 730
  }
]
class CreateGoal extends Component {
  state = {
    title: '',
    content: '',
    goalType: 'flow',
    timeSpan: 90
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTypeChange = e => {
    this.setState({
      goalType: e.target.value
    })
  }

  handleTimeSpanChange = e => {
    this.setState({
      timeSpan: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const newGoal = {
      title: this.state.title,
      content: this.state.content,
      goalType: this.state.goalType,
      timeSpan: this.state.timeSpan
    }
    this.props.createGoal(newGoal);
  }
  
  render() {
    const { classes, submitted } = this.props;
    
    return (
      submitted ? (
        <Redirect to='/' />
      ) : (
        <Grid container className={classes.createGoal} justify="center">
          <Grid item md={6} xs={10}>
            <form 
              className={classes.basicForm} 
              onSubmit={this.handleSubmit}>
            <Grid 
              container 
              justify="center"
              alignItems="center"
              spacing={4}>
              <Grid item sm={10} className={classes.centeredGridItems}>
                <Typography 
                  variant="h4" 
                  className={classes.capsHeading}>
                    Create Goal
                </Typography>
              </Grid>
              <Grid item sm={4} xs={10} className={classes.centeredGridItems}>
                <TextField 
                  className={classes.textField}
                  id="title" 
                  type="text"
                  label="I am going to..." 
                  variant="outlined" 
                  color="secondary"
                  onChange={this.handleChange}/>
                <TextField 
                  className={classes.textField}
                  id="content"
                  type="text" 
                  label="...do this thing" 
                  multiline
                  rows="5"
                  variant="outlined"
                  color="secondary" 
                  onChange={this.handleChange}/>
              </Grid>

              <Grid item sm={4} xs={10} className={classes.centeredGridItems}>
                <InputLabel 
                  id="goalType"
                  className={classes.selectFieldLabel}>
                    ...in this way
                </InputLabel>
                <Select
                  labelId="goalType"
                  id="goalType"
                  className={classes.selectField}
                  value={this.state.goalType}
                  onChange={this.handleTypeChange}
                  input={<BootstrapInput />}
                  variant="outlined"
                >
                  {
                    goalTypes.map(goalType => (
                      <MenuItem 
                        id="goalType"
                        name="goalType"
                        key={goalType.value} 
                        value={goalType.value}>
                        <img 
                          className={classes.selectItem}
                          value={goalType.value}
                          src={goalType.src} 
                          alt={goalType.value} />
                      </MenuItem>
                    ))
                  }
                </Select>
                
                <InputLabel 
                  id="timeSpan"
                  className={classes.selectFieldLabel}>
                    ...in this time span
                </InputLabel>
                <Select
                  labelId="timeSpan"
                  className={classes.selectField}
                  value={this.state.timeSpan}
                  onChange={this.handleTimeSpanChange}
                  input={<BootstrapInput />}
                  variant="outlined"
                >
                  {
                    timeSpans.map(timeSpan => (
                      <MenuItem 
                        id="timeSpan"
                        name="timeSpan"
                        key={timeSpan.name} 
                        value={timeSpan.value}>
                        <Typography variant="body2" color="textSecondary">  {timeSpan.name}
                        </Typography>
                      </MenuItem>
                    ))
                  }
                </Select>
              </Grid>

              <Grid item sm={10} xs={10} className={classes.centeredGridItems}>
                <Button 
                  className={classes.submitBtn}
                  type="submit"
                  variant="contained" 
                  color="secondary">Create</Button>
              </Grid>
            </Grid>
                  
              
            </form>
          </Grid>
        </Grid>

      )
    )
  }
}

const mapActionsToProps = {
  createGoal
}

const mapStateToProps = state => ({
  submitted: state.goal.submittedData
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CreateGoal));