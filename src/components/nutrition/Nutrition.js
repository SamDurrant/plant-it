import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const styles = (theme) => ({
  ...theme.spreadThis,
  nutritionPage: {
    paddingTop: 150,
    minHeight: '100vh'
  }
})

function Nutrition(props) {
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState(50);
  const [protein, setProtein] = useState(20);
  const [fat, setFat] = useState(30);


  const handleSubmit = e => {
    e.preventDefault();
    console.log(calories, carbs, protein, fat);
  }

  
    const { classes } = props;
    return (
      <Grid container className={classes.nutritionPage} justify="center">
        <Grid item md={5} sm={10} xs={10}>
          <form className={classes.basicForm} onSubmit={handleSubmit}>
            <div className={classes.formHeadings}>
              <Typography variant="h4" className={classes.capsHeading}>nutrition profile</Typography>
              <Typography variant="body1" color="secondary">
                Enter in your current TDEE as well as  your desired macro percentages
              </Typography>
            </div>
            <InputLabel 
              id="caloriesLabel"
              className={classes.selectFieldLabel}
              color="secondary">
                Carbs
            </InputLabel>
            <TextField 
              className={classes.textField}
              id="calories" 
              type="text"
              label="Calories" 
              variant="outlined" 
              color="secondary"
              value={calories}
              onChange={e => setCalories(e.target.value)}/>
            <FormControl variant="outlined">
              <InputLabel 
                id="carbsLabel"
                className={classes.selectFieldLabel}
                color="secondary">
                  Carbs
              </InputLabel>
              <Select
                className={classes.selectField}
                labelId="carbsLabel"
                id="carbs"
                value={carbs}
                color="secondary"
                onChange={e => setCarbs(e.target.value)}
              >
                <MenuItem value={10}>10%</MenuItem>
                <MenuItem value={20}>20%</MenuItem>
                <MenuItem value={30}>30%</MenuItem>
                <MenuItem value={40}>40%</MenuItem>
                <MenuItem value={50}>50%</MenuItem>
                <MenuItem value={60}>60%</MenuItem>
                <MenuItem value={70}>70%</MenuItem>
                <MenuItem value={80}>80%</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel 
                id="proteinLabel"
                className={classes.selectFieldLabel}
                color="secondary">
                  Protein
              </InputLabel>
              <Select
                className={classes.selectField}
                labelId="proteinLabel"
                id="protein"
                value={protein}
                color="secondary"
                onChange={e => setProtein(e.target.value)}
              >
                <MenuItem value={10}>10%</MenuItem>
                <MenuItem value={20}>20%</MenuItem>
                <MenuItem value={30}>30%</MenuItem>
                <MenuItem value={40}>40%</MenuItem>
                <MenuItem value={50}>50%</MenuItem>
                <MenuItem value={60}>60%</MenuItem>
                <MenuItem value={70}>70%</MenuItem>
                <MenuItem value={80}>80%</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel 
                id="fatLabel"
                className={classes.selectFieldLabel}
                color="secondary">
                  Fat
              </InputLabel>
              <Select
                className={classes.selectField}
                labelId="fatLabel"
                id="fat"
                value={fat}
                color="secondary"
                onChange={e => setFat(e.target.value)}
              >
                <MenuItem value={10}>10%</MenuItem>
                <MenuItem value={20}>20%</MenuItem>
                <MenuItem value={30}>30%</MenuItem>
                <MenuItem value={40}>40%</MenuItem>
                <MenuItem value={50}>50%</MenuItem>
                <MenuItem value={60}>60%</MenuItem>
                <MenuItem value={70}>70%</MenuItem>
                <MenuItem value={80}>80%</MenuItem>
              </Select>
            </FormControl>
            <Button 
              className={classes.submitBtn}
              type="submit"
              variant="contained" 
              color="secondary">create</Button>
          </form>
        </Grid>
        <Grid item md={5}>

        </Grid>
      </Grid>
    )
}

export default withStyles(styles)(Nutrition);