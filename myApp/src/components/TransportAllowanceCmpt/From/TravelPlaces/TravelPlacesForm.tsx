import React, { useState } from "react";
import { forwardRef } from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Header from '../../../../common/Header/Header';
import Footer from '../../../../common/Footer/Footer';




const TravelPlacesForm = () => {






    return (<>


        <Header />


        <div className='AllPagesCmptSection'>

            <p className='text-center'>Travel Places</p>

            <hr />

            <Form>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Travel Date:   </span>
                </Form.Group>


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
                    <span className='inputTitle'>How Much Time</span>
                    <Form.Control type="text" placeholder="1 hr" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Km Travel</span>
                    <Form.Control type="text" placeholder="1 km" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Total Cost</span>
                    <Form.Control type="text" placeholder="Total Cost" />
                </Form.Group>


                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Mobile Number </span>
                    <Form.Control type="number" placeholder="Mobile Number" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Email Address </span>
                    <Form.Control type="text" placeholder="Email Address" />
                </Form.Group> */}


            </Form>


            <div className="d-grid gap-2 mt-4">
                <Button variant="success" >
                    Submit
                </Button>
            </div>


        </div>
        <Footer />



    </>)
}

export default TravelPlacesForm