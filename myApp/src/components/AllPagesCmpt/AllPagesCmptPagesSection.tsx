import { BsFillArrowRightCircleFill } from 'react-icons/bs';


import { BiTransferAlt } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { MdDomainVerification } from 'react-icons/md';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { BsSave2Fill } from 'react-icons/bs';
import { FaMoneyBills } from 'react-icons/fa6';
import { MdNotificationsActive } from 'react-icons/md';
import { GiSettingsKnobs } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

const AllPagesCmptPagesSection = () => {
    return (
        <div className='AllPagesCmptSection'>

            <p>App Pages</p>


            {/* Header Other Menu start  */}
            <div className="HeaderContentMenu">


                {/* item  */}
                <NavLink to="/TransportAllowance" >
                    <div className="HeaderContentMenuItem">
                        <div className="HeaderContentMenuItemIcon">
                            <BiTransferAlt className='HeaderContentMenuItemIconImg' />
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


                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <BiTransferAlt className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Transactions
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}


                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <CgDetailsMore className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Transaction Detail
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <MdDomainVerification className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Transaction Verification
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
                        Cards
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <BsSave2Fill className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Savings
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <FaMoneyBills className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Bills
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <MdNotificationsActive className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Notifications
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <CgDetailsMore className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Notification Detail
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

                {/* item  */}
                <div className="HeaderContentMenuItem">

                    <div className="HeaderContentMenuItemIcon">
                        <GiSettingsKnobs className='HeaderContentMenuItemIconImg' />
                    </div>
                    <div className="HeaderContentMenuItemText">
                        Settings
                    </div>
                    <div className="HeaderContentMenuItemArrow">
                        <BsFillArrowRightCircleFill className='HeaderContentMenuItemIconImg' />
                    </div>

                </div>
                {/* item  */}

            </div>
            {/* Header Other Menu end */}




        </div>
    )
}

export default AllPagesCmptPagesSection