import React from 'react'
import Footer from '../../../common/Footer/Footer'
import {
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./TransactionDetails.css"
import { AiFillPrinter } from 'react-icons/ai';
import { PiShareFatFill } from 'react-icons/pi';


const TransactionDetails = () => {
    return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='text-center'>Transaction Detail</IonTitle>
                </IonToolbar>
            </IonHeader>






            <Card>
                <Card.Header className="text-center">

                    <div className="m-5">

                        <div className="RoundedBox bg-primary"></div>

                        <IonTitle>Payment Details</IonTitle>

                    </div>
                </Card.Header>




                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Status</div>
                    <div className="PaymentItemRight text-success">Success</div>
                </div>





                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">To</div>
                    <div className="PaymentItemRight">Jordi Santiago</div>
                </div>



                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Bank Name</div>
                    <div className="PaymentItemRight">Sonali Bank LTD</div>
                </div>



                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Transaction Category</div>
                    <div className="PaymentItemRight">Shopping</div>
                </div>



                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Receipt</div>
                    <div className="PaymentItemRight">Yes</div>
                </div>



                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Date</div>
                    <div className="PaymentItemRight">Sep 25, 2023 10:45 AM</div>
                </div>



                <div className="PaymentItemBox">
                    <div className="PaymentItemLeft">Amount</div>
                    <div className="PaymentItemRight">$ 259</div>
                </div>




                <div className="PaymentItemBoxSubmit">

                    <div className="d-grid gap-2 mb-2">
                        <Button variant="success" >
                            Print
                            <AiFillPrinter className='PaymentItemBoxSubmitIcon'/>
                        </Button>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="success" >
                            Share
                            <PiShareFatFill className='PaymentItemBoxSubmitIcon'/>
                        </Button>
                    </div>

                </div>




            </Card>












            <Footer />
        </div>
    )
}

export default TransactionDetails