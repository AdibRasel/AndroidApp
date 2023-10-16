import React from 'react'


import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';



import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TravelImage = "https://odishanewsinsight.com/wp-content/uploads/2019/03/Travel-Transport-Allowance-to-Odisha-Students.jpg"

import { NavLink } from 'react-router-dom';
import HomeLastestNews from '../HomeCmpt/HomeLastestNews';


const TransportAllowanceListCmpt = () => {
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


            <NavLink to="/TravelPlacesList" className="d-grid gap-2 mb-2">
                <Button variant="success" >
                    Travel Places List
                </Button>
            </NavLink>

            <NavLink to="/TravelVisitList" className="d-grid gap-2">
                <Button variant="success" >
                    Travel Visit List
                </Button>
            </NavLink>


        </Card.Body>
    </Card>


    <HomeLastestNews />



</div>
  )
}

export default TransportAllowanceListCmpt