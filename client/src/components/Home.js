import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { withStyles, makeStyles } from '@material-ui/core/styles';


const Home = () => {
  const [post, setPost] = useState([]);

  const baseURL = 'http://localhost:8080/pokemon';

  const getRepo = () => {
    axios.get(baseURL)
      .then((response) => {
        let allPokemon = response.data.pokemon;
        setPost(allPokemon);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  };

  useEffect(() => getRepo(), []);

  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      display: 'grid',
      alignItems: 'baseline',
      width: '100%',
    },
    paper: {
      // width: '90%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    backgroundHead: {
      color: '#ffffff!important',
      backgroundColor: '#333',
    }
  }));

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


  const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: 'id' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  ];

console.log(post.length);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table">
          <Table  
            className={classes.table} 
            size="small" 
            aria-label="a dense table">
            <TableHead>
              <TableRow className={classes.backgroundHead}>
              {headCells.map((headCell, index) => (
                <StyledTableCell
                  key={index}
                  align={headCell.numeric ? 'right' : 'left'}>
                  {headCell.label}
                </StyledTableCell>
                ))
              }
              </TableRow>
            </TableHead>
            <TableBody>
              {post.length && post !== 0 ? (
                  post.map((item, index) => {
                  console.log(index)
                  return (
                    <StyledTableRow key={index}>
                      <TableCell align="left">{index}</TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                    </StyledTableRow>
                  )
                })
                ) : (console.log("no data"))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
};

export default Home;