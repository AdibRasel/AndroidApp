import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { FaBalanceScale } from 'react-icons/fa';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsFillSendCheckFill } from 'react-icons/bs';
import { LuWalletCards } from 'react-icons/lu';
import { MdCurrencyExchange } from 'react-icons/md';



const DashBoardHome = () => {
    return (
        <div>

            <div className="HeaderColorMatch">

            </div>

            {/*  Card HeaderDashBoardCard Start  */}
            <div className="HeaderDashBoardCardBox">
                <IonCard>


                    <div className="HeaderDashBoardCard">
                        <div className="HeaderDashBoardCardLeft">
                            <p>Total Balance</p>
                            <h2>$ 2,562.50</h2>
                        </div>
                        <div className="HeaderDashBoardCardRight">
                            <FaBalanceScale />
                        </div>
                    </div>


                    <div className="Dash"></div>

                    <div className="HeaderDashBoardCardWithdraw">

                        <div className="HeaderDashBoardCardWithdrawList">
                            <div className="HeaderDashBoardCardWithdrawListBox1">
                                <BiMoneyWithdraw className='HeaderDashBoardCardWithdrawListBoxIcon' />
                            </div>
                            <p>Withdraw</p>
                        </div>

                        <div className="HeaderDashBoardCardWithdrawList">
                            <div className="HeaderDashBoardCardWithdrawListBox2">
                                <BsFillSendCheckFill className='HeaderDashBoardCardWithdrawListBoxIcon' />
                            </div>
                            <p>Send</p>
                        </div>

                        <div className="HeaderDashBoardCardWithdrawList">
                            <div className="HeaderDashBoardCardWithdrawListBox3">
                                <LuWalletCards className='HeaderDashBoardCardWithdrawListBoxIcon' />
                            </div>
                            <p>Cards</p>
                        </div>

                        <div className="HeaderDashBoardCardWithdrawList">
                            <div className="HeaderDashBoardCardWithdrawListBox4">
                                <MdCurrencyExchange className='HeaderDashBoardCardWithdrawListBoxIcon' />
                            </div>
                            <p>Exchange</p>
                        </div>

                    </div>
                </IonCard>
            </div>
            {/* Card HeaderDashBoardCard end  */}




        </div>
    )
}

export default DashBoardHome