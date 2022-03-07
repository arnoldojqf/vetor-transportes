import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import 'ba-styles/vendors/react-loading-bar/index.css';
import { changeThemeAction } from 'ba-actions/UiActions';
import themePallete from 'ba-api/themePalette';
import TemplateSettings from 'ba-components/TemplateSettings';
import { Button, Icon } from '@material-ui/core';
import styles from '../Templates/appStyles-jss';

function ThemeWrapper(props) {
  const {
    classes,
    children,
    palette,
    color,
    changeTheme
  } = props;

  const [pageLoaded, setPageLoaded] = useState(true);
  const [open, setOpen] = useState(false);
  const [newPalette, setNewPalette] = useState(undefined);
  const [theme, setTheme] = useState(
    createMuiTheme(themePallete(color))
  );

  useEffect(() => {
    setNewPalette(palette);
    setPageLoaded(true);
    setTimeout(() => {
      setPageLoaded(false);
    }, 500);
    return () => {
      setPageLoaded(true);
    };
  }, []);

  const handleOpenPallete = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = event => {
    setTheme(createMuiTheme(themePallete(event.target.value)));
    changeTheme(event.target.value);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Loading
          show={pageLoaded}
          color="rgba(255,255,255,.9)"
          showSpinner={false}
        />
        {/* <Button onClick={handleOpenPallete} className={classes.btnPicker}>
          <span className={classes.btn}>
            <Icon className={classes.icon}>palette</Icon>
            Theme
          </span>
        </Button> */}
        <TemplateSettings
          open={open}
          palette={newPalette}
          changeTheme={handleChangeTheme}
          selectedValue={color}
          close={handleClose}
        />
        {children}
      </div>
    </MuiThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  palette: PropTypes.object.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  ...state,
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
