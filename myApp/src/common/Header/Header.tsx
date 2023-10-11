import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';

import "./Header.css"

import HeaderLogo from "../../assets/img/logo.png"

import { MdNotificationsActive } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import MenuBallance from './MenuBallance';
import MenuHeaderSide from './MenuHeaderSide';
import OtherMenuHeaderSide from './OtherMenuHeaderSide';




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
                    <MenuBallance />
                    {/* Menu Ballance end  */}








                    {/* Header Menu start  */}
                    <MenuHeaderSide />
                    {/* Header Menu end */}







                    {/* Header Other Menu start  */}
                    <OtherMenuHeaderSide />
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