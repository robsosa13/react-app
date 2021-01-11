import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import { request } from '../helpers/helpers';
import '../planilla/PlanillaMaestra.css'
import { APIHOST as host } from '../../app.json'    
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import DataGrid from '../grid/grid'
import DataGridPlanilla from '../grid/gridPlanillaM'

const { SearchBar } = Search;
const columns = [{
    dataField: '_id',
    text: 'Product ID',
    hidden: true
}, {
    dataField: 'idPlanillaMayor',
    text: 'CI'
}, {
    dataField: 'Exp',
    text: 'Exp'
},
{
    dataField: 'Apellido Paterno',
    text: 'Apellido Paterno'
}, {
    dataField: 'Apellido Materno',
    text: 'Apellido Materno'
}, {
    dataField: 'Nombres',
    text: 'Nombres'
},
{
    dataField: 'Nacionalidad',
    text: 'Nacionalidad'
}, {
    dataField: 'Fecha de Nacimiento ',
    text: 'Fecha de Nacimiento'
}, {
    dataField: 'Sexo ',
    text: 'Sexo'
}, {
    dataField: 'Ocupacion',
    text: 'Ocupacion'
}, {
    dataField: 'Fecha Ingreso Empresa',
    text: 'Fecha Ingreso Empresa'
},
{
    dataField: 'Fecha Retiro Empresa',
    text: 'Fecha Retiro Empresa'
}, {
    dataField: 'Dias Pagados',
    text: 'Dias Pagados'
}, {
    dataField: 'Haber Básico',
    text: 'Haber Básico'
}
    , {
    dataField: 'Total Días Pagados',
    text: 'Total Días Pagados'
},
{
    dataField: 'Bono de Antiguedad',
    text: 'Bono de Antiguedad'
},
{
    dataField: 'N° Horas Extras',
    text: 'N° Horas Extras'
}, {
    dataField: 'Importe Pagado',
    text: 'Importe Pagado'
}, {
    dataField: 'Bono Produccion',
    text: 'Bono Produccion'
}
    , {
    dataField: 'Otros Bonos',
    text: 'Otros Bonos'
},
{
    dataField: 'Total Ganado',
    text: 'Total Ganado'
}, {
    dataField: 'AFP (%12.71)',
    text: 'AFP (%12.71)'
}
    , {
    dataField: 'Aporte Nal. Solidario',
    text: 'Aporte Nal. Solidario'
},
{
    dataField: 'RC IVA',
    text: 'RC IVA'
},
{
    dataField: 'Anticipos',
    text: 'Anticipos'
}, {
    dataField: 'Otros descuentos',
    text: 'Otros descuentos'
}, {
    dataField: 'Total Descuentos',
    text: 'Total Descuentos'
}
    , {
    dataField: 'Liquido Pagable',
    text: 'Liquido Pagable'
}

];

export default class PlanillaMensual extends Component {
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
            <div>
                <Container id="planilla-maestra-container">
                <Row>
                    <h1>Planilla Mensual</h1>
                </Row>
                <Row>
                    <DataGridPlanilla
                        url="/planillas"
                        columns={columns}
                        // showEditButton={true}
                        // showPlanilla={true}
                        // onClickEditButton={this.onClickEditButton}
                    //    changeTab={this.props.changeTab}
                    />
                    {/* <BootstrapTable keyField='id' data={products} columns={columns} pagination={paginationFactory()} /> */}
                </Row>
            </Container>

            </div>
            
        )
    }
}
