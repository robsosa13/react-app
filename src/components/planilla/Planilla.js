import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Container } from 'reactstrap';


class Planilla extends Component {
    render() {
        return (
            <div>
                <h1>Planilla de sueldos </h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CI</th>
                            <th>Exp.</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Nombres</th>
                            <th>Nacionalidad</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Sexo</th>
                            <th>Ocupacion que desempeña</th>
                            <th>Fecha de Ingreso a la empresa</th>
                            <th>Fecha de retiro de la empresa</th>
                            <th>Dias pagados</th>
                            <th>Haber Basico </th>
                            <th>Total Dias pagados</th>
                            <th>Num. Horas extras</th>
                            <th>Importe Horas Extras</th>
                            <th>Bono Produccion </th>
                            <th>Otros Bonos</th>
                            <th>Total Ganado</th>
                            <th>AFP (12.71%)</th>
                            <th>Aporte Nacional Solidario</th>
                            <th>RC IVA 13%</th>
                            <th>Anticipos</th>
                            <th>Otros Descuentos</th>
                            <th>Total descuentos</th>
                            <th>Liquido pagable</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>sa</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        )

    }



}
export default Planilla