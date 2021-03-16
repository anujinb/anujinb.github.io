import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../components/avatar.jpg';
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  mainContainer: {
    background: 'linear-gradient( #ece9e6,#dae2f8)',
    height: '100vh',
  },
  container: {
    top: 100,
    left: '50%',
    width: '100vw',
    textAlign: 'center',
  },

  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',

    textAlign: 'center',
    zIndex: 1,
  },
}));
export default function Main() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <div className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="pic" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={['Hello, I am Anujin']} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={['Web Development', 'Web Design']}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </div>
    </Box>
  );
}
