import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import { MdNotificationsActive } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

import "./Header.css"

import HeaderLogo from "../assets/img/logo.png"

import { BiUserCircle } from 'react-icons/bi';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsSend, BsFillCreditCard2FrontFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrOverview } from 'react-icons/gr';
import { SiPowerpages } from 'react-icons/si';
import { TbComponents } from 'react-icons/tb';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { CiSettings } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';


// import { IonList, IonItem, IonIcon, IonBadge } from '@ionic/react';
// import { pieChartOutline, documentTextOutline, appsOutline, cardOutline, settingsOutline, chatbubbleOutline, logOutOutline } from 'ionicons/icons';


import { IonModal, IonList, IonItem, IonIcon, IonBadge, IonButton } from '@ionic/react';
import { pieChartOutline, documentTextOutline, appsOutline, cardOutline, settingsOutline, chatbubbleOutline, logOutOutline, addOutline, arrowDownOutline, arrowForwardOutline, closeOutline } from 'ionicons/icons';



const Header = () => {




    return (
        <div>



            <IonMenu contentId="main-content">


                <IonHeader>
                    <IonToolbar>
                        {/* <IonTitle>Menu Content</IonTitle> */}
                        <div className="MenuProfile">

                            <div className="MenuProfileTextImage">
                                <div className="MenuUser">
                                    <BiUserCircle className='MenuUser' />
                                </div>

                                <div className="MenuUserText">
                                    <p>Sebastian Doe</p>
                                    <span>4586580</span>
                                </div>
                            </div>


                            <div className="MenuBalance">

                                <p>Balance</p>
                                <h2>$ 2,562.50</h2>

                                <div className="MenuBalanceItemBox">


                                    <div className="MenuBalanceItem">
                                        <GiPayMoney className='MenuBalanceItemIcon' />
                                        <p>Deposit </p>
                                    </div>

                                    <div className="MenuBalanceItem">
                                        <GiReceiveMoney className='MenuBalanceItemIcon' />
                                        <p>Withdraw</p>
                                    </div>

                                    <div className="MenuBalanceItem">
                                        <BsSend className='MenuBalanceItemIcon' />
                                        <p>Send</p>
                                    </div>

                                    <div className="MenuBalanceItem">
                                        <BsFillCreditCard2FrontFill className='MenuBalanceItemIcon' />
                                        <p>Cards</p>
                                    </div>

                                </div>


                            </div>


                        </div>


                    </IonToolbar>
                </IonHeader>



                {/* IonContent Menu start  */}
                <IonContent>


                    {/* HeaderContentMenu start  */}
                    <div className="HeaderContentMenu">
                        <p>Menu</p>

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <GrOverview className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                            Overview <div className="ContentMenuBox">6</div>
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                             <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <SiPowerpages className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Pages
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <TbComponents className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Components
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <LiaCreditCardSolid className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                My Cards
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}







                    </div>
                    {/* HeaderContentMenu end */}



                    {/* HeaderContentMenu start  */}
                    <div className="HeaderContentMenu">
                        <p>Others</p>

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <CiSettings className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Settings
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <MdSupportAgent className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Support
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <BiLogIn className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Log out
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                            </div>

                        </div>
                        {/* item  */}

                       







                    </div>
                    {/* HeaderContentMenu end */}



                </IonContent>
                {/* IonContent Menu end  */}








            </IonMenu>




            <IonPage id="main-content">
                <IonHeader>
                    <div className='HeaderBox'>

                        {/* Menu Toggle Button start  */}
                        <IonButtons slot="start">
                            <IonMenuButton className='HeaderToggle'></IonMenuButton>
                        </IonButtons>
                        {/* Menu Toggle Button end  */}


                        <div className="HeaderBoxCenter">

                            <div className="HeaderCenter">
                                <img src={HeaderLogo} alt="" />
                            </div>

                            <div className="HeaderRight">

                                <div className="HeaderNotification">
                                    <MdNotificationsActive className='NotificationAlart' />
                                    <span className='NotificationBage'>4</span>
                                </div>
                                <div className="HeaderProfile">
                                    <FaUserAlt className='NotificationAlart' />
                                    <span className='NotificationBage'>6</span>
                                </div>
                            </div>
                        </div>



                    </div>
                </IonHeader>



            </IonPage>




        </div>
    )
}

export default Header