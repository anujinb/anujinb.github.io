import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import travel from './travel.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import restaurant from './restaurant.png';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  slide: {
    color: '#e91e63',
  },

  mainContainer: {
    background: ' #fff',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 385,

    margin: '5rem auto',
  },
  heading: {
    color: 'black',
    padding: '4rem 0',
    textTransform: 'uppercase',
  },
  projects: {
    heading: {
      color: 'black',
      padding: '3rem 0',
      textTransform: 'uppercase',
    },
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="220"
                image={travel}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginBottom: 0 }}
                >
                  Travel
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => {
                  window.open('https://anujinb.github.io/travel/#/');
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="220"
                image={restaurant}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" style={{ marginBottom: 0 }}>
                Restaurant
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => {
                  window.open('https://anujinb.github.io/restaurant/');
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
