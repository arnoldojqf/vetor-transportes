import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'ba-components';
import { Paper } from '@material-ui/core';
import { CrudTbFormDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CrudTableTwoPage extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Tables/demos/';
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
        <PapperBlock title="Suporte Contábil (MEI)" desc="Isso é um teste de layout">
          <div>
            <Paper className={classes.root}>
              <CrudTbFormDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'CrudTbFormDemo.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

CrudTableTwoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrudTableTwoPage);
