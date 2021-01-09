import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Container, Row } from 'react-bootstrap';
import './PlanillaMaestra.css'
import PlanillaMaster from './PlanillaMaestra'
import PlanillaCrear from './crear'


export default class Planillas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab:"buscar"
        }
    }
    changeTab(tab){
        this.setState({currentTab:tab});

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
                        <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="crear">Crear</Nav.Link>
                    </Nav.Item>
                 
                </Nav>

            </Row>
            <Row>
              {
                  this.state.currentTab==="buscar"? <PlanillaMaster/>:<PlanillaCrear changeTab={tab=> this.changeTab(tab)}/>
              }
            

            </Row>


        </Container>
        )
    }
}