import React from 'react';
import { NavLink } from 'react-router-dom';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiSolidLogIn } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineDomainVerification } from 'react-icons/md';
import { BsQrCode } from 'react-icons/bs';


const AllPagesCmptAuthentication = () => {
    return (
        <div className='AllPagesCmptSection'>

            <p>Authentication</p>


            {/* Header Other Menu start  */}
            <div className="HeaderContentMenu">


                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="AllPagesCmptAuthenticatonIcon">
                        <BiSolidLogIn />
                    </div>
                    <div className="HeaderContentMenuItemText">
                    Login 
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='AllPagesCmptAuthenticatonRightArrow' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="AllPagesCmptAuthenticatonIcon">
                        <RiLockPasswordFill />
                    </div>
                    <div className="HeaderContentMenuItemText">
                    Forgot Password 
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill  className='AllPagesCmptAuthenticatonRightArrow' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="AllPagesCmptAuthenticatonIcon">
                        <MdOutlineDomainVerification />
                    </div>
                    <div className="HeaderContentMenuItemText">
                    SMS Verification
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill  className='AllPagesCmptAuthenticatonRightArrow' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="AllPagesCmptAuthenticatonIcon">
                        <BsQrCode />
                    </div>
                    <div className="HeaderContentMenuItemText">
                    QR Code Verification
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill  className='AllPagesCmptAuthenticatonRightArrow' />
                    </div>

                </div>
                {/* item  */}

                

            </div>
            {/* Header Other Menu end */}




        </div>
    )
}

export default AllPagesCmptAuthentication