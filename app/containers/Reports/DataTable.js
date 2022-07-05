import React from 'react';
import MUIDataTable, { ExpandButton } from 'mui-datatables';
import { reportsService } from '../../services/report.service';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class DataTable extends React.Component {
  state = { data: [] }

  componentDidMount () {
    //let items = [];

    reportsService.getLogisticsAnalitico()
      // .then(resp => 
      //   //console.log('resp: ', resp) 
      //   resp.json
      // )
      // .then(data => {
      //     data.forEach(item => {
      //         let itemAux = item;
      //         itemAux.initDate = new Date(item.initDate * 1000);
      //         items.push(itemAux);
      //         });  
              
      //         data = items;

      //         return data;
      //     })
          //.then(data => this.setState({ data }));
          .then(data => { console.log('data', data); this.setState({ data }); });
  }

  render() {
    const columns = [
      {
        name: "routeId",
        label: "Id",
        options: {
          filter: true,
        },
      },
      {
        name: "facilityId",
        label: "Operação",
        options: {
          filter: true,
        },
      },
      {
        name: "driverName",
        label: "Motorista",
        options: {
          filter: true,          
        }
      },  
      {
        name: "strInitDate",
        label: "Data",
        options: {
          filter: true,
        }
      },
      {
        name: "hourInitDate",
        label: "Hora",
        options: {
          filter: true,
        }
      },      
      {
        name: "routes",
        label: "Qt. Rotas",
        options: {
          filter: true,
        },
      },
      {
        name: "carrier",
        label: "Transportadora",
        options: {
          filter: true,
        }
      },
      {        
        name: "spr",
        label: "SPR",
        options: {
          filter: false,
        }
      },
      {        
        name: "total",
        label: "Pacotes",
        options: {
          filter: false,
        }
      },
      {
        name: "delivered",
        label: "Entregue",
        options: {
          filter: false,
        }
      },
      {
        name: "notDelivered",
        label: "Insucesso",
        options: {
          filter: false,
        }
      },      
      {
        name: "cycle",
        label: "Ciclo",
        options: {
          filter: false,
        }
      },
      {        
        name: "ds",
        label: "DS",
        options: {
          filter: false,
        }
      },
      {
        name: "orh",
        label: "ORH",
        options: {
          filter: false,
        }
      },
      {
        name: "orhMax",
        label: "ORH MAX",
        options: {
          filter: false,
        }
      },
      {
        name: "dpph",
        label: "DPPH",
        options: {
          filter: false,
        }
      },
      {
        name: "pnr",
        label: "PNR",
        options: {
          filter: false,
        }
      },
    ];

    const data = this.state.data;    

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
      print: true,
      rowsPerPage: 10,
      page: 1,    
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      isRowExpandable: (dataIndex, expandedRows) => {
        if (dataIndex === 3 || dataIndex === 4) return false;

        // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0)
          return false;
        return true;
      },
      rowsExpanded: [0, 1],
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>Custom expandable row option. Data: {JSON.stringify(rowData)}</TableCell>
          </TableRow>
        );
      },
      onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
        console.log(curExpanded, allExpanded, rowsExpanded),  
    };

    const components = {
      ExpandButton: function(props) {
        if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{ width: '24px' }} />;
        return <ExpandButton {...props} />;
      },
    };

    return (
      <MUIDataTable
        title="Logistics"
        data={data}
        columns={columns}
        options={options}
        components={components}
      />
    );
  }
}

export default DataTable;
