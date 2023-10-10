import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/react';


import { AiFillHome } from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { RiExchangeBoxLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { BiTransferAlt } from 'react-icons/bi';
import { AiOutlineCaretRight } from 'react-icons/ai';


const AlPagesCmptCryptocurrency = () => {
    return (
        <div className='AllPagesCmptSection'>



            <p>Cryptocurrency</p>


            {/* <IonList inset={true}> */}
            <IonList>


                {/* item start  */}
                <NavLink to="/home" className="AllPagesCmptPageSectionItem">
                    <IonItem button={true}>

                        <div slot="start" className="CryptocurrencyPageIcon">
                            <AiFillHome />
                        </div>

                        <IonLabel>Home </IonLabel>

                        <div slot="end" className="RightArroAllPagesCmpt">
                            <AiOutlineCaretRight />
                        </div>
                    </IonItem>
                </NavLink>
                {/* item end  */}


                {/* item start  */}
                <NavLink to="/home" className="AllPagesCmptPageSectionItem">
                    <IonItem button={true}>

                        <div slot="start" className="CryptocurrencyPageIcon">
                            <FaCoins />
                        </div>

                        <IonLabel>Coin Detail</IonLabel>

                        <div slot="end" className="RightArroAllPagesCmpt">
                            <AiOutlineCaretRight />
                        </div>
                    </IonItem>
                </NavLink>
                {/* item end  */}


                {/* item start  */}
                <NavLink to="/home" className="AllPagesCmptPageSectionItem">
                    <IonItem button={true}>

                        <div slot="start" className="CryptocurrencyPageIcon">
                            <RiExchangeBoxLine />
                        </div>

                        <IonLabel>Exchange</IonLabel>

                        <div slot="end" className="RightArroAllPagesCmpt">
                            <AiOutlineCaretRight />
                        </div>
                    </IonItem>
                </NavLink>
                {/* item end  */}


                {/* item start  */}
                <NavLink to="/home" className="AllPagesCmptPageSectionItem">
                    <IonItem button={true}>

                        <div slot="start" className="CryptocurrencyPageIcon">
                            <CgWebsite />
                        </div>

                        <IonLabel>Portfolio  </IonLabel>

                        <div slot="end" className="RightArroAllPagesCmpt">
                            <AiOutlineCaretRight />
                        </div>
                    </IonItem>
                </NavLink>
                {/* item end  */}


                {/* item start  */}
                <NavLink to="/home" className="AllPagesCmptPageSectionItem">
                    <IonItem button={true}>

                        <div slot="start" className="CryptocurrencyPageIcon">
                            <BiTransferAlt />
                        </div>

                        <IonLabel>Transactions  </IonLabel>

                        <div slot="end" className="RightArroAllPagesCmpt">
                            <AiOutlineCaretRight />
                        </div>
                    </IonItem>
                </NavLink>
                {/* item end  */}






            </IonList>







        </div>
    )
}

export default AlPagesCmptCryptocurrency