import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';

import "./Header.css"

import HeaderLogo from "../assets/img/logo.png"

import { MdNotificationsActive } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsSend, BsFillCreditCard2FrontFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SiPowerpages } from 'react-icons/si';
import { TbComponents } from 'react-icons/tb';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { CiSettings } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import { LuView } from 'react-icons/lu';




const Header = () => {




    return (
        <div>


            {/* Side Menu Start  */}
            <IonMenu contentId="main-content">

                <IonHeader>
                    <IonToolbar>
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
                        </div>
                    </IonToolbar>
                </IonHeader>



                {/* IonContent Menu start  */}
                <IonContent>




                    {/* Menu Ballance start  */}
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
                    {/* Menu Ballance end  */}









                    {/* Header Menu start  */}
                    <div className="HeaderContentMenu">
                        <p>Menu</p>

                        {/* item  */}
                        <div className="HeaderContentMenuItem">

                            <div className="HeaderContentMenuItemIcon">
                                <LuView className='HeaderContentMenuItemIconImg' />
                            </div>
                            <div className="HeaderContentMenuItemText">
                                Overview
                            </div>
                            <div className="HeaderContentMenuItemArrow">
                                <div className="ContentMenuBoxNotisRed">6</div>
                                <div className="ContentMenuBoxNotis">6</div>
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



                        {/* item  */}
                        <NavLink to="/TransportAllowance" >
                            <div className="HeaderContentMenuItem">

                                <div className="HeaderContentMenuItemIcon">
                                    <LiaCreditCardSolid className='HeaderContentMenuItemIconImg' />
                                </div>
                                <div className="HeaderContentMenuItemText">
                                    Transport Allowance
                                </div>
                                <div className="HeaderContentMenuItemArrow">
                                    <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                                </div>

                            </div>
                        </NavLink>
                        {/* item  */}







                    </div>
                    {/* Header Menu end */}



                    {/* Header Other Menu start  */}
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
                    {/* Header Other Menu end */}



                </IonContent>
                {/* IonContent Menu end  */}

            </IonMenu>
            {/* Side Menu end  */}


            {/* Header Menu Start  */}
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
            {/* Header Menu end  */}




        </div>
    )
}

export default Header