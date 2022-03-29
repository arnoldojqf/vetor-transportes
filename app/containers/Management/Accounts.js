import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'ba-components';
import { Paper } from '@material-ui/core';
import { CrudTbFormAccounts } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Accounts extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Management/';
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Usuários" desc="Gestão de usuários">
          <div>
            <Paper className={classes.root}>
              <CrudTbFormAccounts />
            </Paper>
            <SourceReader componentName={docSrc + 'CrudTbFormAccounts.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Accounts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accounts);
