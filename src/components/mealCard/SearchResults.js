import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI items
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

const styles = (theme) => ({
  ...theme.spreadThis
})

function SearchResults({ rows, classes }) {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <Fragment>
      <TableContainer>
        <Table aria-label='item search table'>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Serving</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => {
              return (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.serving}</TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">
                    +
                  </TableCell>
                </TableRow>
              )
              })
          }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}/>
    </Fragment>
  )
}

export default withStyles(styles)(SearchResults);
