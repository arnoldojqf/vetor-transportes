import React from 'react';
import MUIDataTable from 'mui-datatables';
import { reportsService } from '../../services/report.service';
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
          .then(data => this.setState({ data }));
  }

  render() {
    const columns = [
      {
        name: "_id",
        label: "_id",
        options: {
          filter: false,
          display: 'excluded',
        },
      },
      {
        name: "id",
        label: "id",
        options: {
          filter: false,
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
        name: "driver.driverName",
        label: "Motorista",
        options: {
          filter: true,          
        }
      },      
      {
        name: "carrier",
        label: "Transportadora",
        options: {
          filter: true,
        }
      },
      {        
        name: "counters.total",
        label: "SPR",
        options: {
          filter: false,
        }
      },
      {
        name: "counters.delivered",
        Label: "Entregue",
        options: {
          filter: false,
        }
      },
      {
        name: "counters.notDelivered",
        label: "Insucesso",
        options: {
          filter: false,
        }
      },
      {
        name: "dtInitDate",
        label: "Data Início",
        options: {
          filter: true,
        }
      },
      {
        name: "dtFinalDate",
        label: "Data Fim",
        options: {
          filter: true,
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
    };
    return (
      <MUIDataTable
        title="Logistics"
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default DataTable;
