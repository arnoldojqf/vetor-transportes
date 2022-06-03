import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';
import Check from '@material-ui/icons/Check';
import AcUnit from '@material-ui/icons/AcUnit';
import Adb from '@material-ui/icons/Adb';
import AllInclusive from '@material-ui/icons/AllInclusive';
import AssistantPhoto from '@material-ui/icons/AssistantPhoto';
import imgData from 'ba-api/imgData';
import Type from 'ba-styles/Typography.scss';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  LinearProgress,
  Divider,
  Chip,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import Timeline from '../SocialMedia/Timeline';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './profile-jss';


class About extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={3}
      >

        <Grid item xs={12}>
          {/* Profile Progress */}
          {/* <div className={classes.progressRoot}>
            <Paper className={classes.styledPaper} elevation={4}>
              <Typography className={classes.title} variant="h5" component="h3">
                <span className={Type.light}>Profile Strength: </span>
                <span className={Type.bold}>Intermediate</span>
              </Typography>
              <Grid container justify="center">
                <Chip
                  avatar={(
                    <Avatar>
                      <Check />
                    </Avatar>
                  )}
                  label="60% Progress"
                  className={classes.chip}
                  color="primary"
                />
              </Grid>
              <LinearProgress variant="determinate" className={classes.progress} value={60} />
            </Paper>
          </div> */}
          {/* ----------------------------------------------------------------------*/}
          {/* About Me */}
          <PapperBlock title="Sobre Mim" whiteBg noMargin desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
            <Divider className={classes.divider} />
            <List dense className={classes.profileList}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRange />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nascimento" secondary="Jan 9, 1994" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalPhone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Telefone" secondary="(+62)8765432190" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOn />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Endereço" secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain" />
              </ListItem>
            </List>
          </PapperBlock>
          {/* ----------------------------------------------------------------------*/}            
        </Grid>
      </Grid>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
