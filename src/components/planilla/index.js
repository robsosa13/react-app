import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Container, Row } from 'react-bootstrap';
import './PlanillaMaestra.css'
import PlanillaMaster from './PlanillaMaestra'
import PlanillaCrear from './crear'
import PlanillaEditar from './editar';


export default class Planillas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab:"buscar",
            _id:null
        }
        this.changeTab=this.changeTab.bind(this);
        
        this.setIdPlanilla=this.setIdPlanilla.bind(this);
        
        this.getIdPlanilla=this.getIdPlanilla.bind(this);

    }
    changeTab(tab){
        this.setState({currentTab:tab});

    }
    setIdPlanilla(id){
        this.setState({_id:id})

    }
    getIdPlanilla(){
        return this.state._id
    }
    render() {  
        return (<Container id="planillas-container">
            <Row>
                <Nav
                 fill
                  variant="tabs"
                   defaultActiveKey="buscar"
                   onSelect={eventKey=>this.setState({currentTab:eventKey})}
                   
                   >
               
                    <Nav.Item>
                        <Nav.Link eventKey="buscar">Planillas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="crear">Crear Planilla</Nav.Link>
                    </Nav.Item>
                 
                </Nav>

            </Row>
            <Row>
              {
                  this.state.currentTab==="buscar"? 
                  <PlanillaMaster changeTab={this.changeTab} setIdPlanilla={this.setIdPlanilla}/>: 
                  this.state.currentTab === "crear"? <PlanillaCrear changeTab={this.changeTab} />:
                  <PlanillaEditar getIdPlanilla={this.getIdPlanilla} />


              }
            

            </Row>


        </Container>
        )
    }
}