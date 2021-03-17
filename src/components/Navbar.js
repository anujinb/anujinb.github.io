import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 2,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  header1: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 28,
    marginLeft: theme.spacing(3),
  },
  header2: {
    color: '#f44336',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 28,
    flexGrow: 1,
  },
  nav: {
    marginRight: theme.spacing(2),
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 16,
    textDecoration: 'none',
    color: 'white',
  },
  buttonLink: {
    textDecoration: 'none',
    '&:hover': {
      background: 'pink',
      color: 'tomato',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        style={{
          background: 'linear-gradient(to right, #86A8E7,#8CA6DB,#7474BF)',
        }}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.header1}>
            Portfo
          </Typography>
          <Typography variant="h5" className={classes.header2}>
            lio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
