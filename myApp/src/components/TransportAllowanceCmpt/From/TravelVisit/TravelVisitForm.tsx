import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import { useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Header from '../../../../common/Header/Header';
import Footer from '../../../../common/Footer/Footer';

import { TravelVisitCreate } from "../../../../apiService/TransportAllowanceService"


const TravelVisitForm = () => {




    const OfficeNameRef = useRef<HTMLInputElement>(null);
    const OfficeAddressRef = useRef<HTMLInputElement>(null);
    const OfficeEmailRef = useRef<HTMLInputElement>(null);
    const OfficeMobileNumberRef = useRef<HTMLInputElement>(null);
    const PersonNameRef = useRef<HTMLInputElement>(null);
    const PersonAddressRef = useRef<HTMLInputElement>(null);
    const PersonEmailRef = useRef<HTMLInputElement>(null);
    const PersonMobileNumberRef = useRef<HTMLInputElement>(null);
    const RemarksRef = useRef<HTMLInputElement>(null);

    const historyRef = useHistory(); // Initialize useHistory


    // Travel Visit Create Btn
    const TravelVisitCreateBtn = () => {
        if (
            OfficeNameRef.current &&
            OfficeAddressRef.current &&
            OfficeEmailRef.current &&
            OfficeMobileNumberRef.current &&
            PersonNameRef.current &&
            PersonAddressRef.current &&
            PersonEmailRef.current &&
            PersonMobileNumberRef.current &&
            RemarksRef.current 
        ) {
            const OfficeName = OfficeNameRef.current.value;
            const OfficeAddress = OfficeAddressRef.current.value;
            const OfficeEmail = OfficeEmailRef.current.value;
            const OfficeMobileNumber = OfficeMobileNumberRef.current.value;
            const PersonName = PersonNameRef.current.value;
            const PersonAddress = PersonAddressRef.current.value;
            const PersonEmail = PersonEmailRef.current.value;
            const PersonMobileNumber = PersonMobileNumberRef.current.value;
            const Remarks = RemarksRef.current.value;

            // Check if each input field has at least 3 characters
            if (OfficeName.length < 3) {
                alert("Office Name must have at least 3 characters.");
            } else if (OfficeAddress.length < 3) {
                alert("Office Address must have at least 3 characters.");
            } else {


                TravelVisitCreate(OfficeName, OfficeAddress, OfficeEmail, OfficeMobileNumber, PersonName, PersonAddress, PersonEmail, PersonMobileNumber, Remarks).then((Res) => {

                    if (Res === true) {


                        alert("Travel Visit Create Success")


                    } else {

                        alert('Travel Visit Create faild')
                        console.log(Res)


                    }

                })

            }
        }
    };







    return (<>


        <Header />


        <div className='AllPagesCmptSection'>

            <p className='text-center'>Travel Visit</p>

            <hr />

            <Form>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Office Name   </span>
                    <Form.Control ref={OfficeNameRef} type="text" placeholder="Office Name" />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Office Address </span>
                    <Form.Control ref={OfficeAddressRef} type="text" placeholder="Office Address" />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Office Email </span>
                    <Form.Control ref={OfficeEmailRef} type="email" placeholder="Office Email" />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Office Mobile Number </span>
                    <Form.Control ref={OfficeMobileNumberRef} type="text" placeholder="Office Mobile Number" />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Person Name </span>
                    <Form.Control ref={PersonNameRef} type="text" placeholder="Person Name" />
                </Form.Group>



                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Person Address</span>
                    <Form.Control ref={PersonAddressRef} type="text" placeholder="Person Address" />
                </Form.Group>



                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Person Email </span>
                    <Form.Control ref={PersonEmailRef} type="email" placeholder="Email" />
                </Form.Group>


                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Person Mobile Number</span>
                    <Form.Control ref={PersonMobileNumberRef} type="text" placeholder="Person Mobile Number" />
                </Form.Group>
                
                
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <span className='inputTitle'>Remarks</span>
                    <Form.Control ref={RemarksRef} type="text" placeholder="Remarks" />
                </Form.Group>


            </Form>


            <div className="d-grid gap-2 mt-4">
                <Button onClick={TravelVisitCreateBtn} variant="success" >
                    Submit
                </Button>
            </div>


        </div>
        <Footer />



    </>)
}

export default TravelVisitForm