import React from 'react'

import "./TransportAllowanceCmpt.css"

import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';


import TravelPlaces from './From/TravelPlaces/TravelPlacesForm';
import TravelVisit from './From/TravelVisit/TravelVisitForm';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TravelImage = "https://odishanewsinsight.com/wp-content/uploads/2019/03/Travel-Transport-Allowance-to-Odisha-Students.jpg"

import { NavLink } from 'react-router-dom';
import HomeLastestNews from '../HomeCmpt/HomeLastestNews';




const TransportAllowanceCmpt = () => {

    return (
        <div className='AllPagesCmptSection'>

            <p className='text-center mb-2'>Transport Allowance</p>



            <Card className=''>
                <Card.Img variant="top" src={TravelImage} />
                <Card.Body>
                    <Card.Title>Transport Allowance</Card.Title>
                    <Card.Text className='mb-2'>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>


                    <NavLink to="/TravelPlaces" className="d-grid gap-2 mb-2">
                        <Button variant="success" >
                            Travel Places
                        </Button>
                    </NavLink>

                    <NavLink to="/TravelVisit" className="d-grid gap-2">
                        <Button variant="success" >
                            Travel Visit
                        </Button>
                    </NavLink>


                </Card.Body>
            </Card>


            <HomeLastestNews />



        </div>
    )
}

export default TransportAllowanceCmpt