import React, { Component ,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Container } from 'reactstrap';
class PlanillaMaestra extends Component {
    // http://localhost:4201/api/planilla-mayor
    // state = {
    //     data_a: []
    // }
 

        state = {
            data_a: []
        };
 
    async componentDidMount() {
        //Banderazo
        await this.fetchPlanillaMaster()
    }
    fetchPlanillaMaster = async () => {
        let res = await fetch('http://localhost:4201/api/planilla-mayor')
        let data = await res.json()
        // console.log(data)
        this.setState({ data_a: data });
        // this.setState({data: [...json]});
        // fetch('http://localhost:4201/api/planilla-mayor')
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((json) => {
        //         this.setState({ data: [json] });
        //         console.log(json)
        //     });
    }
    render() {
        const { data_a } = this.state;
     //   const [dato,setData]=useState(data_a);
        console.log('test-1', data_a)
        return (
            <div>   
                <h1>Planilla Maestra</h1>
                <Table striped border="1">
                    <thead>
                        <tr>
                            <th>Nro.</th>
                            <th>Caja</th>
                            <th>Razon Social</th>
                            <th>Logo</th>
                            <th>Titulo</th>
                            <th>Nit</th>
                            <th>Salario Minimo</th>
                            <th>Periodo Planilla</th>
                            <th>Año Planilla</th>
                            <th>AFP</th>
                            <th>Ciudad</th>
                            <th>Sucursal</th>
                            <th>Direccion</th>
                            <th>UFV Inicial </th>
                            <th>Telefono</th>
                            <th>UFV Final</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data_a.map(planillas => {
                            return (
                  
                                <tr >
                                    <td >{planillas._id}</td>
                                    <td>{planillas.afp}</td>
                                    <td>{planillas.año_planilla}</td>
                                    <td>{planillas.caja}</td>
                                    <td>{planillas.ciudad}</td>
                                    <td>{planillas.direccion}</td>
                                    <td>{planillas.logo}</td>
                                    <td>{planillas.nit}</td>
                                    <td>{planillas.periodo_planilla}</td>
                                    <td>{planillas.razon_social}</td>
                                    <td>{planillas.salario_minimo}</td>
                                    <td>{planillas.sucursal}</td>
                                    <td>{planillas.telefono}</td>
                                    <td>{planillas.titulo}</td>
                                    <td>{planillas.ufv_final}</td>
                                    <td>{planillas.ufv_inicial}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
// function  PlanillaMaestra(props){
//     return (
//     )
// }
export default PlanillaMaestra