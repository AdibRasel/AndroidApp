import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';

import {MenuUserDetails} from "../../apiService/MenuUserDetails.js"

import "./Header.css"

import HeaderLogo from "../../assets/img/logo.png"

import { MdNotificationsActive } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import MenuBallance from './MenuBallance';
import MenuHeaderSide from './MenuHeaderSide';
import OtherMenuHeaderSide from './OtherMenuHeaderSide';
import { useEffect, useState } from 'react';




const Header = () => {

    const [UserName, SetUserName] = useState('');
    const [UserImage, SetImage] = useState('');

    // useEffect(() => {
    //   const fetchData = async () => {
    //     // try {
    //     //   const userDetails = await MenuUserDetails();
    //     //   // Set the user name from userDetails or handle the data as needed
    //     //   console.log("MenuUserDetails")
    //     //   console.log(MenuUserDetails.data[0].UserEmail)
    //     //   SetUserName(userDetails.username); // Replace 'username' with the actual property name from userDetails
    //     // } catch (error) {
    //     //   // Handle errors, e.g., show an error message
    //     //   console.error(error);
    //     // }
    //   };
    //   fetchData(); // Call the asynchronous function
    // }, []);
  

    useEffect(() => {
        MenuUserDetails().then((Response) => {
          SetUserName(Response.data[0].FirstName);
          SetImage(Response.data[0].Photo);
          console.log("Response");
          console.log(Response.data[0].FirstName);
        });
      }, []);


    return (
        <div>


            {/* Side Menu Start  */}
            <IonMenu contentId="main-content">

                <IonHeader>
                    <IonToolbar>
                        <div className="MenuProfile">

                            <div className="MenuProfileTextImage">
                                <div className="MenuUser">
                                    {/* <BiUserCircle className='MenuUser' /> */}
                                    <img className='MenuUser' src={UserImage} alt="" />

                                </div>

                                <div className="MenuUserText">
                                    <p>{UserName}</p>
                                    <span><b>ID:</b> 4586580</span>
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

                            <NavLink to="/" >
                                <div className="HeaderCenter">
                                    <img src={HeaderLogo} alt="" />
                                </div>
                            </NavLink>

                            <div className="HeaderRight">


                                <NavLink to="/Notification" >
                                    <div className="HeaderNotification">
                                        <MdNotificationsActive className='NotificationAlart' />
                                        <span className='NotificationBage'>4</span>
                                    </div>
                                </NavLink>

                                <NavLink to="/Settings" >
                                    <div className="HeaderProfile">
                                        {/* <FaUserAlt className='NotificationAlart' /> */}
                                        <img className='NotificationAlart' src={UserImage} alt="" />
                                        <span className='NotificationBage'>6</span>
                                    </div>
                                </NavLink>

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