import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: '#222' }}>
      <BottomNavigationAction
        onClick={() => {
          window.open('https://www.facebook.com/anujinbtjl');
        }}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        onClick={() => {
          window.open('https://github.com/anujinb');
        }}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default Footer;
