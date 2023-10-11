import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Header from '../../../../common/Header/Header';
import Footer from '../../../../common/Footer/Footer';


const TravelVisitForm = () => {
    return (
        <div>

            <Header />


            <Card className='mt-3'>
                <Card.Header as="h5" className='text-center'>Travel Visit</Card.Header>
                <Card.Body>



                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Office Name   </span>
                            <Form.Control type="text" placeholder="Office Name" />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Office Address </span>
                            <Form.Control type="text" placeholder="Office Address" />
                        </Form.Group>


                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Person Name </span>
                            <Form.Control type="text" placeholder="Person Name" />
                        </Form.Group>




                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Mobile </span>
                            <Form.Control type="number" placeholder="Mobile" />
                        </Form.Group>


                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Email Address</span>
                            <Form.Control type="text" placeholder="Email Address" />
                        </Form.Group>


                    </Form>


                    <div className="d-grid gap-2 mt-4">
                        <Button variant="success" >
                            Submit
                        </Button>
                    </div>

                </Card.Body>
            </Card>





            <Footer />



        </div>
    )
}

export default TravelVisitForm