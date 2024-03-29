import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import themePalette from 'ba-api/themePalette';
import { Radio, Paper } from '@material-ui/core';
import styles from './themeStyles-jss';

const ThemeThumb = props => {
  const { classes } = props;
  return (
    <Paper className={classNames(classes.thumb, props.theme === props.value ? classes.selectedTheme : '')}>
      <Radio
        checked={props.selectedValue === props.value}
        value={props.value}
        onChange={props.handleChange}
      />
      { props.name }
      <div className={classes.appPreview}>
        <header style={{ background: themePalette(props.value).palette.primary.main }} />
        <aside>
          <ul>
            {[0, 1, 2, 3].map(index => {
              if (index === 1) {
                return (
                  <li key={index.toString()}>
                    <i style={{ background: themePalette(props.value).palette.secondary.main }} />
                    <p style={{ background: themePalette(props.value).palette.secondary.main }} />
                  </li>
                );
              }
              return (
                <li key={index.toString()}>
                  <i style={{ background: themePalette(props.value).palette.secondary.main }} />
                  <p />
                </li>
              );
            })}
          </ul>
        </aside>
        <Paper className={classes.content}>
          <div className={classes.title} style={{ background: themePalette(props.value).palette.primary.main }} />
          <div className={classes.ctn1} style={{ background: themePalette(props.value).palette.secondary.main }} />
          <div className={classes.ctn2} style={{ background: themePalette(props.value).palette.primary.light }} />
          <div className={classes.ctn2} style={{ background: themePalette(props.value).palette.primary.light }} />
          <div className={classes.ctn2} style={{ background: themePalette(props.value).palette.secondary.light }} />
          <div className={classes.ctn2} style={{ background: themePalette(props.value).palette.secondary.light }} />
        </Paper>
      </div>
    </Paper>
  );
};

ThemeThumb.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Redux
const reducer = 'ui';
const mapStateToProps = state => ({
  theme: state.getIn([reducer, 'theme']),
});

const ThumbsMapped = connect(
  mapStateToProps,
)(ThemeThumb);

export default withStyles(styles)(ThumbsMapped);
