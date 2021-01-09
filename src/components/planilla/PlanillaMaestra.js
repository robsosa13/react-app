import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { request } from '../helpers/helpers';
import '../planilla/PlanillaMaestra.css'
import { APIHOST as host } from '../../app.json'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import DataGrid from'../grid/grid' 

const {SearchBar}=Search;

// const products = [
//     { id: 1, name: "producto 1", price: 2 },
//     { id: 1, name: "producto 1", price: 2 }, { id: 1, name: "producto 1", price: 2 },
//     { id: 1, name: "producto 1", price: 2 }, { id: 1, name: "producto 1", price: 2 },
//     { id: 1, name: "producto 1", price: 2 }, { id: 1, name: "producto 1", price: 2 },
//     { id: 1, name: "producto 1", price: 2 }, { id: 1, name: "producto 1", price: 2 },
//     { id: 1, name: "test", price: 2 }, { id: 1, name: "producto 1", price: 2 }
// ];
const columns = [{
    dataField: '_id',
    text: 'Product ID',
    hidden:true
}, {
    dataField: 'caja',
    text: 'Caja'
}, {
    dataField: 'razon_social',
    text: 'Razon Social'
},
{
    dataField: 'logo',
    text: 'Logo'
}, {
    dataField: 'titulo',
    text: 'Titulo'
}, {
    dataField: 'nit',
    text: 'Nit'
},
{
    dataField: 'salario_minimo',
    text: 'Salario Minimo'
}, {
    dataField: 'año_planilla',
    text: 'Anio Plantilla'
}, {
    dataField: 'afp',
    text: 'AFP'
}, {
    dataField: 'ciudad',
    text: 'Ciudad'
}, {
    dataField: 'sucursal',
    text: 'Sucursal'
},
{
    dataField: 'direccion',
    text: 'Direccion'
}, {
    dataField: 'ufv_inicial',
    text: 'UFV Inicial'
}, {
    dataField: 'telefono',
    text: 'Telefono'
}
, {
    dataField: 'ufv_final',
    text: 'UFV Final'
}

];



export default class PlanillaMaestra extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
    

        return (
            <Container id="planilla-maestra-container">
                <Row>
                    <h1>Test</h1>
                </Row>
                <Row>
                   <DataGrid 
                   url="/planilla-mayor"
                   columns={columns}
                   
                   />

                    {/* <BootstrapTable keyField='id' data={products} columns={columns} pagination={paginationFactory()} /> */}
                </Row>
            </Container>

        )
    }
}

// class PlanillaMaestra extends Component {

//         state = {
//             data_a: []
//         };

//     async componentDidMount() {

//         await this.fetchPlanillaMaster()
//     }
//     fetchPlanillaMaster = async () => {
//         let res = await fetch('http://localhost:4201/api/planilla-mayor')
//         let data = await res.json()

//         this.setState({ data_a: data });

//     }
//     render() {
//         const { data_a } = this.state;

//         console.log('test-1', data_a)
//         return (
//             <div>   
//                 <h1>Planilla Maestra</h1>
//                 <Table striped border="1">
//                     <thead>
//                         <tr>
//                             <th>Nro.</th>
//                             <th>Caja</th>
//                             <th>Razon Social</th>
//                             <th>Logo</th>
//                             <th>Titulo</th>
//                             <th>Nit</th>
//                             <th>Salario Minimo</th>
//                             <th>Periodo Planilla</th>
//                             <th>Año Planilla</th>
//                             <th>AFP</th>
//                             <th>Ciudad</th>
//                             <th>Sucursal</th>
//                             <th>Direccion</th>
//                             <th>UFV Inicial </th>
//                             <th>Telefono</th>
//                             <th>UFV Final</th>
//                             <th>Opciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data_a.map(planillas => {
//                             return (

//                                 <tr >
//                                     <td >{planillas._id}</td>
//                                     <td>{planillas.afp}</td>
//                                     <td>{planillas.año_planilla}</td>
//                                     <td>{planillas.caja}</td>
//                                     <td>{planillas.ciudad}</td>
//                                     <td>{planillas.direccion}</td>
//                                     <td>{planillas.logo}</td>
//                                     <td>{planillas.nit}</td>
//                                     <td>{planillas.periodo_planilla}</td>
//                                     <td>{planillas.razon_social}</td>
//                                     <td>{planillas.salario_minimo}</td>
//                                     <td>{planillas.sucursal}</td>
//                                     <td>{planillas.telefono}</td>
//                                     <td>{planillas.titulo}</td>
//                                     <td>{planillas.ufv_final}</td>
//                                     <td>{planillas.ufv_inicial}</td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </Table>
//             </div>
//         )
//     }
// }

// export default PlanillaMaestra