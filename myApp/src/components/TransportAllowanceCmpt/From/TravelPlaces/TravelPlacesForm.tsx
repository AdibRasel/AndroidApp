import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Header from '../../../../common/Header/Header';
import Footer from '../../../../common/Footer/Footer';




const TravelPlacesForm = () => {
    return (
        <div>

            <Header />



            <Card className='mt-3'>
                <Card.Header as="h5" className='text-center'>Travel Places</Card.Header>
                <Card.Body>




                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Travel From  </span>
                            <Form.Control type="text" placeholder="Travel From" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Travel To </span>
                            <Form.Control type="text" placeholder="Travel To" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Vehicle Name </span>
                            <Form.Control type="text" placeholder="Vehicle Name" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Mobile Number </span>
                            <Form.Control type="number" placeholder="Mobile Number" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Email Address </span>
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

export default TravelPlacesForm