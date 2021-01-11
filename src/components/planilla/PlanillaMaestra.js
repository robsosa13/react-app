import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { request } from '../helpers/helpers';
import '../planilla/PlanillaMaestra.css'
import { APIHOST as host } from '../../app.json'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import DataGrid from '../grid/grid'

const { SearchBar } = Search;
const columns = [{
    dataField: '_id',
    text: 'Product ID',
    hidden: true
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
    text: 'Año Plantilla'
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
        this.onClickEditButton = this.onClickEditButton.bind(this)
    }
    componentDidMount() {

    }
    onClickEditButton(row) {
        //console.log(row)
        //this.props.changeTab("editar")
        this.props.setIdPlanilla(row._id)
        this.props.changeTab("editar")
    }
    render() {
        return (
            <Container id="planilla-maestra-container">
                <Row>
                    <h1>Planilla Maestra</h1>
                </Row>
                <Row>
                    <DataGrid
                        url="/planilla-mayor"
                        columns={columns}
                        showEditButton={true}
                        showPlanilla={true}
                        onClickEditButton={this.onClickEditButton}
                    //    changeTab={this.props.changeTab}
                    />
                    {/* <BootstrapTable keyField='id' data={products} columns={columns} pagination={paginationFactory()} /> */}
                </Row>
            </Container>
        )
    }
}
