import React, { useState, useContext, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


import { getItems } from '../../util/nutritionix';

// Context items
import { authContext } from '../../contexts/AuthContext';

// MUI items
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = (theme) => ({
  ...theme.spreadThis,
  dashboard: {
    paddingTop: 125,
    minHeight: '100vh'
  },
  dailyCard: {
    height: 'fit-content',
    backgroundColor: '#eee',
    padding: 0
  },
  dailyHeading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    height: 'fit-content'
  },
  dailyTable: {
    width: '100%',
    height: 'fit-content',
    margin: '0 15px'
  },
  removeButton: {
    fontSize: '1.75rem',
    display: 'block',
    cursor: 'pointer',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      opacity: 1
    }
  }
})

function DailyCard(props) {
  const [search, setSearch] = useState({value: '', type: ''});
  const [searching, setSearching] = useState(false);

  const { classes } = props;

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    const searchResult = await getItems(search.value);
    console.log(searchResult);
  }
  
  const rows = [
    createData('Steel Cut Oats', 170, 3.0, 29, 7.0),
    createData('Erythritol', 0, 0.0, 2, 0),
    createData('Pumpkin Seeds', 28, 2.5, 0.6, 1.5),
    createData('Ground Flaxseed', 18, 1.5, 1, 0.5),
    createData('Berries', 18, 0.1, 4.2, 0.2),
    createData('Greek Yogurt', 50, 0, 3.5, 9)
  ];

  return (
    <Grid 
      container item 
      md={7} sm={10} xs={12}
      alignContent='flex-start'
      className={classes.dailyCard}>
      <Grid item className={classes.dailyHeading}>
        <Typography variant='h5'>Breakfast</Typography>
        <form onSubmit={handleSearch}>
        <TextField 
          className={classes.searchField}
          id='breakfast'
          label='search'
          size='small'
          variant='outlined'
          value={search.value}
          onChange={e => setSearch({value: e.target.value, type: e.target.id})} />
        </form>
      </Grid>
      <Grid item className={classes.dailyTable}>
        <TableContainer>
          <Table aria-label="meal table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">
                    <HighlightOffIcon 
                    color='primary' 
                    className={classes.removeButton} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(DailyCard);
