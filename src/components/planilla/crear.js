
import React, { Component } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import {request} from '../helpers/helpers'

export default class PlanillaCrear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planilla:{
                    caja: "",
                   razon_social : "",
                    logo: "",
                    nit : "",
                    salario_minimo : "",
                    periodo_planilla : "",
                   año_planilla : "",
                    afp : "",
                    ciudad : "",
                    sucursal : "",
                    direccion : "",
                    ufv_inicial : "",
                   telefono : "",
                    ufv_final : "",
            }
        }
    }
    setValue(index,value){
        this.setState({
            planilla:{
                ...this.state.planilla,[index]:value
            }
        })

    }
    guardarPlanilla(){
        request.post("/planilla-mayor/nueva-planilla",this.state.planilla).then(response=>{
            if(response.data.exito){
                this.props.changeTab("buscar")
            }
               
        }).catch(err=>{
            console.log(err)
        })

    }

    render() {

        return (
            <Container id="planillas-crear-container">
                <Row>
                    <h1>Crear Planilla</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>caja</Form.Label>
                            <Form.Control 
                            type="email" 
                           onChange={e=>this.setValue("caja",e.target.value)}
                            
                            
                            />
                         
                        </Form.Group>

                        <Form.Group controlId="formBasictext">
                            <Form.Label>razon_social</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("razon_social",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>logo</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("logo",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>nit</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("nit",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>salario_minimo</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("salario_minimo",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>periodo_planilla</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("periodo_planilla",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>año_planilla</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("año_planilla",e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasictext">
                            <Form.Label>afp</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("afp",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>ciudad</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("ciudad",e.target.value)}  />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>sucursal</Form.Label>
                            <Form.Control type="text"     onChange={e=>this.setValue("sucursal",e.target.value)}/>
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>direccion</Form.Label>
                            <Form.Control type="text"  onChange={e=>this.setValue("direccion",e.target.value)}/> 
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>ufv_inicial</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("ufv_inicial",e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>telefono</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("telefono",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>ufv_final</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("ufv_final",e.target.value)} />
                        </Form.Group>
                       

                       

                        <Button variant="primary"
                        onClick={()=>this.guardarPlanilla()}>
                            Crear Planilla
                     </Button>
                    </Form>
                </Row>


            </Container>
        )
    }
}

