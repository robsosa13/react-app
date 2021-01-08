import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PlanillaNew extends Component {
    // handleClick =()=>{
    //     console.log('Click')
    // }
    render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  
                    </FormGroup>
            
              
                  
                    <Button>Submit</Button>
                </Form>

            </div>

            // <button onClick={this.handleClick} >
            //         Test
            // </button>
        )
    }
}
export default PlanillaNew