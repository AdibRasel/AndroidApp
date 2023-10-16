import React, { useEffect, useState } from 'react';
import Footer from '../../../common/Footer/Footer'
import Header from '../../../common/Header/Header'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { TravelVisitAllList } from "../../../apiService/TransportAllowanceService";

const TravelVisitList = () => {

  const [TravelVisitList, setTravelVisitList] = useState([]);

  useEffect(() => {
    try {
      TravelVisitAllList().then((Response) => {
        console.log("Response");
        console.log(Response);
        setTravelVisitList(Response.data.DataList);
      });
    } catch (e) {
      console.log("Read Failed, Request Failed! API Service > Try > if > else");
    }
  }, []);







  return (<>
    <Header />


    <div className="Div">




      <Card>
        <Card.Body>
          <Card.Title className='text-center'>Travel Places List</Card.Title>



          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>S.L</th>
                <th>Office Name</th>
                <th>Office Address</th>
                <th>Office Email</th>
                <th>Office Mobile Number</th>
                <th>Person Name</th>
                <th>Person Address</th>
                <th>Person Email</th>
                <th>Person Mobile Number</th>
                <th>Remarks</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>

              {TravelVisitList.map((TravelVisit, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{TravelVisit.OfficeName}</td>
                  <td>{TravelVisit.OfficeAddress}</td>
                  <td>{TravelVisit.VehicleName}</td>
                  <td>{TravelVisit.OfficeEmail}</td>
                  <td>{TravelVisit.OfficeMobileNumber}</td>
                  <td>{TravelVisit.PersonName}</td>
                  <td>{TravelVisit.PersonAddress}</td>
                  <td>{TravelVisit.PersonEmail}</td>
                  <td>{TravelVisit.PersonMobileNumber}</td>
                  <td>{TravelVisit.Remarks}</td>
                  <td>{TravelVisit.CreatedDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>




        </Card.Body>
      </Card>








    </div>


    <Footer />
  </>
  )
}

export default TravelVisitList