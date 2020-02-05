import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = (theme) => ({
  ...theme.spreadThis,
  removeButton: {
    fontSize: '1.75rem',
    display: 'block',
    cursor: 'pointer',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      opacity: 1
    }
  },
  mealTotals: {
    '&>*': {
      fontWeight: 700,
      color: theme.palette.primary.dark
    }
  }
})

function MealResults({ classes }) {
  // will use userData once context is created and that gets connected with firebase to save user meal history
  const rows = [
    {
      name: 'Steel Cut Oats',
      calories: 170,
      fat: 3,
      carbs: 29,
      protein: 7
    },
    {
      name: 'Erythritol',
      calories: 0,
      fat: 0,
      carbs: 2,
      protein: 0
    },
    {
      name: 'Pumpkin Seeds',
      calories: 28,
      fat: 2.5,
      carbs: 0.6,
      protein: 1.5
    },
    {
      name: 'Ground Flaxseed',
      calories: 18,
      fat: 1.5,
      carbs: 1,
      protein: 0.5
    },
    {
      name: 'Berries',
      calories: 18,
      fat: 0.1,
      carbs: 4.2,
      protein: 0.2
    },
    {
      name: 'Greek yogurt',
      calories: 50,
      fat: 0,
      carbs: 3.5,
      protein: 9
    }
  ];

  const mealTotals = rows.reduce((acc, meal) => {
    return {
      calories: acc.calories + meal.calories,
      fat: acc.fat + meal.fat,
      carbs: acc.carbs + meal.carbs,
      protein: acc.protein + meal.protein
    }
  })

  return (
    <TableContainer>
      <Table aria-label='meal data table'>
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
          <TableRow key={12} className={classes.mealTotals}>
            <TableCell component="th" scope="row">
              Totals
            </TableCell>
            <TableCell align="right">{mealTotals.calories.toFixed(1)}</TableCell>
            <TableCell align="right">{mealTotals.fat.toFixed(1)}</TableCell>
            <TableCell align="right">{mealTotals.carbs.toFixed(1)}</TableCell>
            <TableCell align="right">{mealTotals.protein.toFixed(1)}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withStyles(styles)(MealResults);