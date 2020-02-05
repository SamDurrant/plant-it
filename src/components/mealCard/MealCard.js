import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import SearchResults from './SearchResults';
import MealResults from './MealResults';

import { getItems } from '../../util/nutritionix';

// MUI items
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  dashboard: {
    paddingTop: 125,
    minHeight: '100vh'
  },
  mealCard: {
    height: 'fit-content',
    backgroundColor: '#eee',
    padding: 0,
    margin: '25px auto'
  },
  cardHeading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    height: 'fit-content'
  },
  searchTable: {
    backgroundColor: '#D6EFE8',
    width: '100%',
    padding: '0 15px'
  },
  mealTable: {
    width: '100%',
    height: 'fit-content',
    margin: '0 15px'
  }
})

function MealCard({ classes, mealType }) {
  const [searchQuery, setSearchQuery] = useState({value: '', type: ''});
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // retrieve and assign array of item objects based on user query
    let result = await getItems(searchQuery.value);
    setSearchResult(result);
    // set searching to true, displays results item table
    setSearching(true);
    console.log(searchResult);
  }
  
  return (
    <Grid 
      container item 
      md={7} sm={10} xs={12}
      alignContent='flex-start'
      className={classes.mealCard}>
      <Grid item className={classes.cardHeading}>
        <Typography variant='h5'>{mealType}</Typography>
        <form onSubmit={handleSearch}>
        <TextField 
          className={classes.searchField}
          id={mealType.toLowerCase()}
          label='search'
          size='small'
          variant='outlined'
          value={searchQuery.value}
          onChange={e => setSearchQuery({value: e.target.value, type: e.target.id})} />
        </form>
      </Grid>
      <Grid item className={classes.searchTable}>
        {
          searching ? 
          <SearchResults rows={searchResult} /> : null
        }
      </Grid>
      <Grid item className={classes.mealTable}>
        <MealResults />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(MealCard);
