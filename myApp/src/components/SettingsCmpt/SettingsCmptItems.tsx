import { NavLink } from 'react-router-dom';

import {
    IonToggle,
} from '@ionic/react';

import "./SettingsCmpt.css"

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { MdDarkMode, MdVerified, MdNotificationsActive } from 'react-icons/md';
import { AiFillSound, AiFillEdit } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
import { BiLogOutCircle, BiSolidLogOut } from 'react-icons/bi';






const SettingsCmptItems = () => {


    return (<>





        <div className='AllPagesCmptSection'>
            <p>Theme</p>

            {/* item  */}
            <div className="HeaderContentMenuItem">

                <div className="HeaderContentMenuItemIcon">
                    <MdDarkMode className='HeaderContentMenuItemIconImg' />
                </div>
                <div className="HeaderContentMenuItemText">
                    Dark Mode
                </div>
                <div className="HeaderContentMenuItemArrow">
                    <IonToggle>
                    </IonToggle>
                </div>

            </div>
            {/* item  */}
        </div>


        <div className='AllPagesCmptSection'>
            <p>Notifications</p>

            {/* item  */}
            <div className="HeaderContentMenuItem">

                <div className="HeaderContentMenuItemIcon">
                    <MdNotificationsActive className='HeaderContentMenuItemIconImg' />
                </div>
                <div className="HeaderContentMenuItemText">
                    Payment Alert
                </div>
                <div className="HeaderContentMenuItemArrow">
                    <IonToggle>
                    </IonToggle>
                </div>

            </div>
            {/* item  */}

            {/* item  */}
            <div className="HeaderContentMenuItem">

                <div className="HeaderContentMenuItemIcon">
                    <AiFillSound className='HeaderContentMenuItemIconImg' />
                </div>
                <div className="HeaderContentMenuItemText">
                    Notifications Sound
                </div>
                <div className="HeaderContentMenuItemArrow">
                    <IonToggle>
                    </IonToggle>
                </div>

            </div>
            {/* item  */}


        </div>






        <div className='AllPagesCmptSection'>
            <p>Profile Settings</p>

            {/* item  */}
            <NavLink to="/home" >
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <AiFillEdit className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Change Username
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
            </NavLink>
            {/* item  */}

            {/* item  */}
            <NavLink to="/home" >
                <div className="HeaderContentMenuItem">
                    <div className="HeaderContentMenuItemIcon">
                        <AiFillEdit className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Update E-mail
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>
                </div>
            </NavLink>
            {/* item  */}


            {/* item  */}
            <NavLink to="/home" >
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <AiFillEdit className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Address
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
            </NavLink>
            {/* item  */}



            {/* item  */}
            <div className="HeaderContentMenuItem">

                <div className="HeaderContentMenuItemIcon">
                    <SiGnuprivacyguard className='HeaderContentMenuItemIconImg' />
                </div>
                <div className="HeaderContentMenuItemText">
                    Private Profile
                </div>
                <div className="HeaderContentMenuItemArrow">
                    <IonToggle>
                    </IonToggle>
                </div>

            </div>
            {/* item  */}


        </div>








        <div className='AllPagesCmptSection'>
            <p>Security</p>

            {/* item  */}
            <NavLink to="/home" >
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <AiFillEdit className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Update Password
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
            </NavLink>
            {/* item  */}

            {/* item  */}
            <div className="HeaderContentMenuItem">
                <div className="HeaderContentMenuItemIcon">
                    <MdVerified className='HeaderContentMenuItemIconImg' />
                </div>
                <div className="HeaderContentMenuItemText">
                    2 Step Verification
                </div>
                <div className="HeaderContentMenuItemArrow">
                    <IonToggle>
                    </IonToggle>
                </div>
            </div>
            {/* item  */}


            {/* item  */}
            <NavLink to="/Login" >
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <BiLogOutCircle className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Log out
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
            </NavLink>
            {/* item  */}



            {/* item  */}
            <NavLink to="/Login" >
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <BiSolidLogOut className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Log out all devices
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
            </NavLink>
            {/* item  */}


        </div>






    </>)
}

export default SettingsCmptItems