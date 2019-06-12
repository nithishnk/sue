import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Enquiry.css';
export default class extends Component {
  
  render() {
    return (
      <div className="Contect_section">
        <div className="container box_Container randombox">
          <div className="row mx-0 Main_contant_Top">
            <div className="col-12  Cotant_Section_padding pt-0">
              <h1 className="pb-2 pt-5">Send Us <span className="Cotant_span">A Message </span></h1>
              <Form>
                <Form.Group >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="" required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email  </Form.Label>
                  <Form.Control type="email" placeholder="" required/>

                </Form.Group>

                <Form.Group >
                  <Form.Label>Message </Form.Label>
                  <Form.Control type="text" required/>
                </Form.Group>

                <Button variant="primary pt-1 pb-1" style={{backgroundColor:"rgba(0,0,0,0.4)"}}type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
            
          </div>
        </div>
      </div>

    )
  }
}