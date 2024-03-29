import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Type from 'ba-styles/Typography.scss';
import ArrowForward from '@material-ui/icons/ArrowForward';
import logo from 'ba-images/logo.svg';
import { LoginForm, ErrorNotification } from 'ba-components';
import styles from 'ba-components/Forms/user-jss';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { accountService } from '../../../services/account.service';

class Login extends React.Component {
  state = {
    valueForm: [],
    messageNotif: ""
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: JSON.parse(JSON.stringify(values, null, 2)) }); 

      accountService.login(this.state.valueForm.email, this.state.valueForm.password)
            .then(() => {
                window.location.href = '/app';
            })
            .catch(error => {
              this.setState({messageNotif: error})
                console.log('Login error: ', error);
            });      
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <Grid container spacing={3} alignItems="center" direction="row" justify="center">
            <Grid item container justify="center" spacing={0} className={classes.loginWrap}>
              <Hidden smDown>
                <Grid item md={6} className={classes.welcomeWrap}>
                  {/* Welcome Login */}
                  <div className={classes.welcome}>
                    <div className={classes.welcomeContent}>
                      <div className={classes.brand}>
                        <img src={logo} alt={brand.name} />
                        <h3>{brand.name}</h3>
                      </div>
                      <Typography variant="h3">
                        <span className={Type.light}>Olá,</span>
                      </Typography>
                      <Typography variant="h6" className={classes.brandText}>
                        <span className={Type.regular}>
                          Bem vindo a
                          {' '}
                          {brand.name}
                        </span>
                      </Typography>
                    </div>
                    <ArrowForward className={classes.decoBottom} />
                  </div>
                </Grid>
              </Hidden>
              <Grid item md={6} sm={8} xs={11}>
                {/* ----------------------------------------------------------------------*/}
                {/* Load Login Form */}
                <LoginForm onSubmit={(values) => this.submitForm(values)} />
                <ErrorNotification close={() => { this.setState({messageNotif: ""}) }} message={this.state.messageNotif} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
