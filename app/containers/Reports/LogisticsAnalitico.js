import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'ba-components';
import DataTable from './DataTable';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class LogisticsAnalitico extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Reports/';
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
        <PapperBlock title="Relatório Logistics Analítico" desc="Dados obtidos a partir de importação do sistema Logistics do MELI.">
          <div>
            <DataTable />
            <SourceReader componentName={docSrc + 'DataTable.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(LogisticsAnalitico);
