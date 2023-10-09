import React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const HomeSavingGoals = () => {

    const Gaming = 45;
    const House = 95;
    const Car = 66


    return (
        <div className='HomeSavingGoals'>



            {/* title start  */}
            <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Saving Goals</span>
                <span className='HomeTransactionsHeadingView'>View All</span>
            </div>
            {/* title end  */}





            <Card className='mt-2'>
                <Card.Header>Gaming Console</Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-start'>

                    <div className="HomeSavingGoalSide">

                        <div className="fw-bold">Gaming Console</div>

                        <ProgressBar now={Gaming} striped variant="danger" label={`${Gaming}%`} />

                    </div>

                    <Badge bg="danger" pill>
                        $ 499
                    </Badge>

                </Card.Body>
            </Card>

            <Card className='mt-2'>
                <Card.Header>New House</Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-start'>

                    <div className="HomeSavingGoalSide">

                        <div className="fw-bold">Living</div>

                        <ProgressBar now={House} striped variant="success" label={`${House}%`} />

                    </div>

                    <Badge bg="primary" pill>
                        $ 100,000
                    </Badge>

                </Card.Body>
            </Card>

            <Card className='mt-2'>
                <Card.Header>Sport Car</Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-start'>

                    <div className="HomeSavingGoalSide">

                        <div className="fw-bold">Lifestyle</div>

                        <ProgressBar now={Car} striped variant="info" label={`${Car}%`} />

                    </div>

                    <Badge bg="primary" pill>
                        $ 42,500
                    </Badge>

                </Card.Body>
            </Card>





        </div>
    )
}

export default HomeSavingGoals