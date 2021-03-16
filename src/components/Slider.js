import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Box, Typography } from '@material-ui/core/';
import { Grid } from '@material-ui/core';
import draw from './data.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },

  slide: {
    color: '#e91e63',
  },
  heading: {
    color: 'black',
    padding: '5rem 0',
    textTransform: 'uppercase',
    fontFamily: 'Ubuntu',
  },
  box: {
    width: 500,
  },
}));

export default function Slide() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" align="center" className={classes.heading}>
        Skills
      </Typography>
      <Grid container direction="row" justify="center">
        <Grid item xs={12} sm={8} md={5} lg={5}>
          <img src={draw} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={5}>
          <div className={classes.root}>
            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: 'Ubuntu' }}
            >
              HTML
            </Typography>
            <Slider
              color="secondary"
              className={classes.slide}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={80}
            />

            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: 'Ubuntu' }}
            >
              CSS
            </Typography>
            <Slider
              color="secondary"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={70}
            />

            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: 'Ubuntu' }}
            >
              JavaScript
            </Typography>
            <Slider
              color="secondary"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={70}
            />

            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: 'Ubuntu' }}
            >
              React
            </Typography>
            <Slider
              color="secondary"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={80}
            />
            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: 'Ubuntu' }}
            >
              NodeJS
            </Typography>
            <Slider
              color="secondary"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={80}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
