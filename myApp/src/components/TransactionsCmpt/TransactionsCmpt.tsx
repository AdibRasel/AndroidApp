import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { NavLink } from 'react-router-dom';



const TransactionsCmpt = () => {
    return (
        <div>


            <IonHeader>
                <IonToolbar>
                    <IonTitle className='text-center'>Transactions</IonTitle>
                </IonToolbar>
            </IonHeader>



            {/* Today Start  */}
            <Card className='mt-3 m-3'>
                <Card.Header as="h5">Today</Card.Header>
                <Card.Body>

                    <ListGroup as="ol">

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">App</div>

                                    Android App


                                </div>

                                <Badge bg="primary" pill>
                                    + 35,895.56 /-
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>


                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Trasport Allowance</div>

                                    Travel Places


                                </div>

                                <Badge bg="danger" pill>
                                    - 1405
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>


                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Trasport Allowance</div>

                                    Travel Visit


                                </div>

                                <Badge bg="danger" pill>
                                    - 2069
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">SMS</div>

                                    SMS SEnd


                                </div>

                                <Badge bg="success" pill>
                                    + 6930
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Travel allowances</div>

                                    Travel


                                </div>

                                <Badge bg="info" pill>
                                    success
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>




                    </ListGroup>
                </Card.Body>
            </Card>
            {/* Today End */}







            {/* Yesterday Start  */}
            <Card className='mt-3 m-3'>
                <Card.Header as="h5">Yesterday</Card.Header>
                <Card.Body>

                    <ListGroup as="ol">

                    <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">SMS</div>

                                    SMS SEnd


                                </div>

                                <Badge bg="success" pill>
                                    + 6930
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Travel allowances</div>

                                    Travel


                                </div>

                                <Badge bg="danger" pill>
                                    - 458
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>


                    </ListGroup>
                </Card.Body>
            </Card>
            {/* Yesterday End */}







            {/* Date 1 Start  */}
            <Card className='mt-3 m-3'>
                <Card.Header as="h5">Aug 15, 2023</Card.Header>
                <Card.Body>

                    <ListGroup as="ol">

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Computer</div>

                                    Training


                                </div>

                                <Badge bg="primary" pill>
                                    + 35,895.56 /-
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>


                    </ListGroup>
                </Card.Body>
            </Card>
            {/* Date 1 End */}









            {/* Date 2 Start  */}
            <Card className='mt-3 m-3'>
                <Card.Header as="h5">Sep 4, 2023</Card.Header>
                <Card.Body>

                    <ListGroup as="ol">

                    
                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Trasport Allowance</div>

                                    Travel Places


                                </div>

                                <Badge bg="danger" pill>
                                    - 1405
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>


                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Trasport Allowance</div>

                                    Travel Visit


                                </div>

                                <Badge bg="danger" pill>
                                    - 2069
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">SMS</div>

                                    SMS SEnd


                                </div>

                                <Badge bg="success" pill>
                                    + 6930
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>

                        <NavLink to="/TransactionDetails" >
                            <ListGroup.Item as="li" className="mb-3 d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">

                                    <div className="fw-bold">Travel allowances</div>

                                    Travel


                                </div>

                                <Badge bg="info" pill>
                                    success
                                </Badge>
                            </ListGroup.Item>
                        </NavLink>




                    </ListGroup>
                </Card.Body>
            </Card>
            {/* Date 2 End */}








        </div>
    )
}

export default TransactionsCmpt