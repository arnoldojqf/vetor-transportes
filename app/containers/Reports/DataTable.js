import React from 'react';
import MUIDataTable, { ExpandButton } from 'mui-datatables';
import { reportsService } from '../../services/report.service';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { TableCell, TableRow } from '@material-ui/core';
import {
  FormGroup,
  FormLabel,
  TextField,

} from '@material-ui/core';
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
          filter: false,
        },
      },
      {
        name: "operation",
        label: "Operação",
        options: {
          filter: false,
        },
      },
      {
        name: "driverName",
        label: "Motorista",
        options: {
          filter: false,          
        }
      },  
      {
        name: "strInitDate",
        label: "Data",
        options: {
          filter: false,          
        }        
      },
      {
        name: "tsInitDate",        
        options: {
          display: false,
          filter: true,
          filterType: 'custom',

          // if the below value is set, these values will be used every time the table is rendered.
          // it's best to let the table internally manage the filterList
          //filterList: [25, 50],
          
          customFilterListOptions: {
            render: v => {
              if (v[0] && v[1]) {
                return [`De: ${v[0].format('DD/MM/YYYY HH:mm:ss')}`, `Até: ${v[1].format('DD/MM/YYYY HH:mm:ss')}`];
              }

              return [];
            },
            update: (filterList, filterPos, index) => {
              console.log('customFilterListOnDelete: ', filterList, filterPos, index);

              if (filterPos === 0) {
                filterList[index].splice(filterPos, 1, '');
              } else if (filterPos === 1) {
                filterList[index].splice(filterPos, 1);
              } else if (filterPos === -1) {
                filterList[index] = [];
              }

              return filterList;
            },
          },
          filterOptions: {
            names: [],
            logic(tsInitDate, filters) {  
              
              if(!tsInitDate){
                return true;
              } else if (filters[0] && filters[1]) {                                
                return new Date(tsInitDate) < new Date(filters[0].format()) || new Date(tsInitDate) > new Date(filters[1].format());
              } else if (filters[0]) {                
                return new Date(tsInitDate) < new Date(filters[0].format());
              } else if (filters[1]) {
                return new Date(tsInitDate) > new Date(filters[1].format());
              }
              return false;
            },
            display: (filterList, onChange, index, column) => (
              <div>
                <FormLabel>Data</FormLabel>
                <FormGroup row>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DateTimePicker
                      autoOk
                      ampm={false}
                      disableFuture
                      value={filterList[index][0] || new Date(new Date().setHours('00','00', '00')) }
                      onChange={ (newValue) => {
                        filterList[index][0] = newValue;
                        onChange(filterList[index], index, column);
                      } }
                      label="De"
                    />
                  </MuiPickersUtilsProvider>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DateTimePicker
                      autoOk
                      ampm={false}
                      disableFuture
                      value={filterList[index][1] || new Date(new Date().setHours('23', '59', '59')) }
                      onChange={ (newValue) => {
                        filterList[index][1] = newValue;
                        onChange(filterList[index], index, column);
                      } }
                      label="Até"
                    />
                  </MuiPickersUtilsProvider>
                </FormGroup>
              </div>
            ),
          },
        }
      },
      {
        name: "routes",
        label: "Qt. Rotas",
        options: {
          filter: false,
        },
      },
      {
        name: "carrier",
        label: "Transportadora",
        options: {
          filter: false,
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
        name: "pOrh",
        label: "ORH(%)",
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
        name: "cntClaims",
        label: "Reclamações",
        options: {
          filter: false,
        }
      },
      {
        name: "contactRate",
        label: "Contact Rate",
        options: {
          filter: false,
        }
      },
      {
        name: "claimsData",
        label: "Claims",
        options: {
          display: false,
          filter: false,
        }
      },
    ];    
    
    const columnsClaims = [
      {
        name: "CLA_CLAIM_ID",
        label: "Id",
      },
      {
        name: "dtClaimOpen",
        label: "Data",
      },
      {
        name: "CLAIM_OPENED_DATE",
        label: "Data",
      },
      {
        name: "ITEM_DESC",
        label: "Item",
      },
      {
        name: "MESSAGE",
        label: "Mensagem",
      },
    ]

    const optionsClaims = {
      search: false,
      filter: false,
      download: false,
      pagination: false,
      print: false,
      viewColumns: false
    }

    const data = this.state.data;   

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      selectableRows: 'none',
      enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
      print: true,
      rowsPerPage: 10,
      page: 1,    
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      // isRowExpandable: (dataIndex, expandedRows) => {
      //   if (dataIndex === 3 || dataIndex === 4) return false;

      //   // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
      //   if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0)
      //     return false;
      //   return true;
      // },
      rowsExpanded: [0, 1],
      renderExpandableRow: (rowData, rowMeta) => {        
        const colSpan = rowData.length + 1;
        const claimsData = rowData[rowData.length-1]        

        if(claimsData)
          return (
              <TableRow>
                <TableCell colSpan={colSpan}>              
                    <MUIDataTable
                    title={"Reclamações"}
                    data={claimsData}
                    columns={columnsClaims}
                    options={ optionsClaims }
                  />                
                </TableCell>
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
