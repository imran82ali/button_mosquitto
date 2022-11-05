import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Count from './Count'
import New_button from './New_button'

// import Newform from './Newform'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 800,
  },
});

export default function MainGrid() {
  const classes = useStyles();
  const classTypography = useStylesTypography();

  return (
    <div className={classes.root}>
        
        

      <Grid container spacing={3}>
      {/* <Grid item xs={4}>
          <Paper className={classes.paper}>
              Total Records in Data
              <Count />
          </Paper>
        </Grid> */}



       <Grid item xs={4}>
          <Paper className={classes.paper}>
          <b>  </b>
          {/* <National /> */}
          </Paper>
        </Grid>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
          {/* <Mqtt2 /> */}
          <New_button />

          </Paper>
      </Grid>
      
        
        
      </Grid>
    </div>
  );
}
