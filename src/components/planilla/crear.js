
import React, { Component } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import {request} from '../helpers/helpers'
import MessagePrompt from '../prompts/message'
 
export default class PlanillaCrear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            message:{
                text:"",
                show:false
            }
            ,
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
        this.onExitedMessage=this.onExitedMessage.bind(this)
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
            // if(response.data.exito){
            //     this.props.changeTab("buscar")
            // }
            this.setState({
                redirect:true ,
                message:{
                    text:"Se guardo Exitosamente",
                    show:true
                }
            });
            // this.props.changeTab("buscar")
           
        }).catch(err=>{
            console.log(err)
        })

    }
    onExitedMessage(){
        console.log('lleg')
        if(this.state.redirect){
            this.props.changeTab("buscar")
        }
        //this.props.changeTab("buscar")
   
    }

    render() {

        return (
            <Container id="planillas-crear-container">
                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration ={2500}
                    onExited={this.onExitedMessage}
                />
                <Row>
                    <h1>Crear Planilla</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Caja</Form.Label>
                            <Form.Control 
                            type="email" 
                           onChange={e=>this.setValue("caja",e.target.value)}
                            />
                         
                        </Form.Group>

                        <Form.Group controlId="formBasictext">
                            <Form.Label>Razon Social</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("razon_social",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("logo",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>NIT</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("nit",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Salario Mínimo</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("salario_minimo",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Periodo Planilla</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("periodo_planilla",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Año Planilla</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("año_planilla",e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasictext">
                            <Form.Label>Afp</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("afp",e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text"   onChange={e=>this.setValue("ciudad",e.target.value)}  />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Sucursal</Form.Label>
                            <Form.Control type="text"     onChange={e=>this.setValue("sucursal",e.target.value)}/>
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control type="text"  onChange={e=>this.setValue("direccion",e.target.value)}/> 
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>UFV Inicial</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("ufv_inicial",e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group controlId="formBasictext">
                            <Form.Label>telefono</Form.Label>
                            <Form.Control type="text"    onChange={e=>this.setValue("telefono",e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasictext">
                            <Form.Label>UFV Final</Form.Label>
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

