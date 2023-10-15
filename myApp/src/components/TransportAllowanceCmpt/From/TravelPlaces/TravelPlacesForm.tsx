import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Header from '../../../../common/Header/Header';
import Footer from '../../../../common/Footer/Footer';

import {TravelPlacesCreate} from "../../../../apiService/TransportAllowanceService"




const TravelPlacesForm = () => {
    const TravelFromRef = useRef<HTMLInputElement>(null);
    const TravelToRef = useRef<HTMLInputElement>(null);
    const VehicleNameRef = useRef<HTMLInputElement>(null);
    const MuchTimeRef = useRef<HTMLInputElement>(null);
    const KmTravelRef = useRef<HTMLInputElement>(null);
    const TotalCostRef = useRef<HTMLInputElement>(null);
    const historyRef = useHistory(); // Initialize useHistory


    // Save Button start
    const TravelPlacesCreateBtn = () => {
        if (
            TravelFromRef.current &&
            TravelToRef.current &&
            VehicleNameRef.current &&
            MuchTimeRef.current &&
            KmTravelRef.current &&
            TotalCostRef.current
        ) {
            const TravelFrom = TravelFromRef.current.value;
            const TravelTo = TravelToRef.current.value;
            const VehicleName = VehicleNameRef.current.value;
            const MuchTime = MuchTimeRef.current.value;
            const KmTravel = KmTravelRef.current.value;
            const TotalCost = TotalCostRef.current.value;

            // Check if each input field has at least 3 characters
            if (TravelFrom.length < 3) {
                alert("Travel From must have at least 3 characters.");
            } else if (TravelTo.length < 3) {
                alert("Travel To must have at least 3 characters.");
            } else {


                TravelPlacesCreate(TravelFrom, TravelTo, VehicleName, MuchTime, KmTravel, TotalCost).then((Res) => {

                    if (Res === true) {


                        alert("Travel Places Create Success")


                    } else {

                        alert('Travel Places Create faild')
                        console.log(Res)


                    }

                })

            }
        }
    };









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
                    <Form.Control ref={TravelFromRef} type="text" placeholder="Travel From" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Travel To </span>
                    <Form.Control ref={TravelToRef} type="text" placeholder="Travel To" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Vehicle Name </span>
                    <Form.Control ref={VehicleNameRef} type="text" placeholder="Vehicle Name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>How Much Time</span>
                    <Form.Control ref={MuchTimeRef} type="text" placeholder="1 hr" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Km Travel</span>
                    <Form.Control ref={KmTravelRef} type="text" placeholder="1 km" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Total Cost</span>
                    <Form.Control ref={TotalCostRef} type="number" placeholder="Total Cost" />
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
                <Button onClick={TravelPlacesCreateBtn} variant="success" >
                    Submit
                </Button>
            </div>


        </div>
        <Footer />



    </>)
}

export default TravelPlacesForm