import React, { Component } from "react";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PlanillaNew extends Component {
    // handleClick =()=>{
    //     console.log('Click')
    // }
    state = {
        loading:false,
        error:null
    }
    handleSubmit = async e => {
        this.setState({
            loading:true
        })
        e.preventDefault()
        console.log()
        try {
            let data = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            let res = await fetch('http://localhost:4201/api/planilla-mayor/nueva-planilla', data)
            let json = await res.json()
            console.log('plani', json)
            this.setState({
                loading:false
              
            })
            this.props.history.push('/PlanillaMaster')
        } catch (error) {
            this.setState({
                loading:false
                ,error
            })
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div >
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>

                            <h1>Registrar Planilla Maestra</h1>
                            <Row>
                                <Col xs="6" sm="4"><Label >Caja</Label>
                                    {/* <Input type="text" name="caja" placeholder="Caja" onChange={this.handleChange} value={this.state.caja} /> */}
                                    <Input type="select" name="caja" onChange={this.handleChange} value={this.state.caja}>
                                            <option>Caja Petrolera</option>
                                            <option>Cordes</option>
                                    </Input>
                                    </Col>
                                <Col xs="6" sm="4">       <Label >Razon Social </Label>
                                    <Input type="text" name="razon_social" placeholder="Razon Social"
                                        onChange={this.handleChange} value={this.state.razonSocial} /></Col>
                                <Col sm="4">   <Label >Logo</Label>
                                    <Input type="text" name="logo" placeholder="Logo"
                                        onChange={this.handleChange} value={this.state.logo} /></Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="4">  <Label >Titulo</Label>
                                    <Input type="text" name="titulo" placeholder="Titulo"
                                        onChange={this.handleChange} value={this.state.titulo} /></Col>
                                <Col xs="6" sm="4">    <Label >Nit</Label>
                                    <Input type="text" name="nit" placeholder="Nit"
                                        onChange={this.handleChange} value={this.state.nit} /></Col>
                                <Col sm="4">         <Label >Salario Minimo</Label>
                                    <Input type="text" name="salario_minimo" placeholder="Salario Minimo<"
                                        onChange={this.handleChange} value={this.state.salarioMinimo} /></Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="4">    <Label >Periodo Planilla</Label>
                                <Input type="select" name="periodo_planilla" onChange={this.handleChange} value={this.state.periodoPlanilla} >
                                            <option>Enero</option>
                                            <option>Febrero</option>
                                            <option>Marzo</option>
                                            <option>Abril</option>
                                            <option>Mayo</option>
                                            <option>Junio</option>
                                            <option>Julio</option>
                                            <option>Agosto</option>
                                            <option>Septiembre</option>
                                            <option>Octubre</option>
                                            <option>Noviembre</option>
                                            <option>Diciembre</option>

                                    </Input>
                                    {/* <Input type="text" name="periodo_planilla" placeholder="Periodo Planilla" onChange={this.handleChange} value={this.state.periodoPlanilla} />
                                     */}
                                    
                                    </Col>
                                <Col xs="6" sm="4">      <Label >Año Planilla</Label>
                                    {/* <Input type="text" name="año_planilla" placeholder="Año Planilla"
                                        onChange={this.handleChange} value={this.state.añoPlanilla} /> */}
                                       <Input type="select" name="año_planilla" onChange={this.handleChange} value={this.state.añoPlanilla} >
                                            <option>2021</option>
                                            <option>2022</option>
                                    </Input>   
                                        
                                        </Col>
                                <Col sm="4">                 <Label > AFP</Label>
                                    {/* <Input type="text" name="afp" placeholder="AFP"
                                        onChange={this.handleChange} value={this.state.afp} /> */}
                                           <Input type="select" name="afp" onChange={this.handleChange} value={this.state.afp} >
                                            <option>Prevision</option>
                                            <option>Futuro</option>
                                    </Input>   
                                        </Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="4">     <Label > Ciudad</Label>
                                    {/* <Input type="text" name="ciudad" placeholder="Ciudad"
                                    
                                        onChange={this.handleChange} value={this.state.ciudad} /> */}
                                           <Input type="select" name="ciudad" onChange={this.handleChange} value={this.state.ciudad} >
                                            <option>Cochabamba</option>
                                            <option>La Paz</option>
                                            <option>Potosi</option>
                                            <option>Oruro</option>
                                            <option>Santa Cruz</option>
                                            <option>Beni</option>
                                            <option>Pando</option>
                                            <option>Tarija</option>
                                            <option>El Alto</option>
                                            <option>Chuquisaca</option>
                           

                                    </Input>   
                                        </Col>
                                <Col xs="6" sm="4">            <Label >Sucursal</Label>
                                    <Input type="text" name="sucursal" placeholder="Sucursal"
                                        onChange={this.handleChange} value={this.state.sucursal} /></Col>
                                <Col sm="4">                   <Label >Direccion</Label>
                                    <Input type="text" name="direccion" placeholder="Direccion"
                                        onChange={this.handleChange} value={this.state.direccion} /></Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="4">                <Label >UFV Inicial</Label>
                                    <Input type="text" name="ufv_inicial" placeholder="UFV Inicial"
                                        onChange={this.handleChange} value={this.state.ufvInicial} /></Col>
                                <Col xs="6" sm="4">
                                    <Label >Telefono</Label>
                                    <Input type="text" name="telefono" placeholder="Telefono"
                                        onChange={this.handleChange} value={this.state.telefono} /></Col>
                                <Col sm="4">  <Label >UFV Final</Label>
                                    <Input type="text" name="ufv_final" placeholder="UFV Final"
                                        onChange={this.handleChange} value={this.state.ufvFinal} /></Col>
                            </Row>
                            <Row>
                                <Col xs="6" sm="4"> <Button   >Registrar</Button></Col>
                                <Col xs="6" sm="4"></Col>
                                <Col sm="4"></Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Container>


            </div>

            // <button onClick={this.handleClick} >
            //         Test
            // </button>
        )
    }
}
export default PlanillaNew