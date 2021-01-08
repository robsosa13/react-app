import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    Form,
    Nav,
    FormControl,
    Button
} from 'react-bootstrap';
export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Grupo Empresarial KD</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Recursos Humanos</Nav.Link>
                        <Nav.Link href="#pricing">Planillas</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}