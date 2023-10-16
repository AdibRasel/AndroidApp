import React, { useEffect, useState } from 'react';
import Footer from '../../../common/Footer/Footer';
import Header from '../../../common/Header/Header';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { TravelPlacesAllList } from "../../../apiService/TransportAllowanceService";

const TravelPlacesList = () => {
    const [travelPlacesList, setTravelPlacesList] = useState([]);

    useEffect(() => {
        try {
            TravelPlacesAllList().then((Response) => {
                console.log("Response");
                console.log(Response);
                setTravelPlacesList(Response.data.DataList);
            });
        } catch (e) {
            console.log("Read Failed, Request Failed! API Service > Try > if > else");
        }
    }, []);

    return (
        <>
            <Header />
            <div className="Div">
                <Card>
                    <Card.Body>
                        <Card.Title className='text-center'>Travel Places List</Card.Title>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>S.L</th>
                                    <th>Travel From</th>
                                    <th>Travel To</th>
                                    <th>Vehicle Name</th>
                                    <th>Much Time</th>
                                    <th>Km Travel</th>
                                    <th>Total Cost</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travelPlacesList.map((travelPlace, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{travelPlace.TravelFrom}</td>
                                        <td>{travelPlace.TravelTo}</td>
                                        <td>{travelPlace.VehicleName}</td>
                                        <td>{travelPlace.MuchTime}</td>
                                        <td>{travelPlace.KmTravel}</td>
                                        <td>{travelPlace.TotalCost}</td>
                                        <td>{travelPlace.CreatedDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default TravelPlacesList;
