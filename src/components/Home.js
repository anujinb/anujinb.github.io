import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Particals from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
    width: '100%',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Particals
        canvasClassName={classes.particlesCanva}
        id="particles-js"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: '#fff',
                blur: 5,
              },
            },
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: '#fff',
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 3,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar />
      <Main />
    </>
  );
}
