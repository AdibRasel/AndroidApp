import React from 'react'

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const HomeTransactions = () => {
    return (
        <div>
            
            <div className="HomeTransactions">

                {/* title start  */}
                <div className="HomeTransactionsHeading">
                    <span className='HomeTransactionsHeadingTitle'>Transactions</span>
                    <span className='HomeTransactionsHeadingView'>View All</span>
                </div>
                {/* title end  */}




                {/* item start  */}
                <div className="HomeTransactionsItem">



                    <ListGroup as="ol" numbered>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Cost of goods sold for ordinary business operations.</div>
                                Cras justo odio
                            </div>
                            <Badge bg="success" pill>
                               + 1845.20
                            </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Wages, salaries, commissions, other labor (i.e. per-piece contracts)</div>
                                Cras justo odio
                            </div>
                            <Badge bg="danger" pill>
                                - 1580.0
                            </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Repairs and maintenance.</div>
                                Cras justo odio
                            </div>
                            <Badge bg="success" pill>
                                + 4589.45
                            </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Utilities (i.e. heat, A/C, lighting, water, telephone)</div>
                                Cras justo odio
                            </div>
                            <Badge bg="danger" pill>
                                - 414
                            </Badge>
                        </ListGroup.Item>

                    </ListGroup>


            

                </div>
                {/* item start  end*/}


            </div>
        </div>
    )
}

export default HomeTransactions