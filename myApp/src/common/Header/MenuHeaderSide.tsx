import { NavLink } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SiPowerpages } from 'react-icons/si';
import { TbComponents } from 'react-icons/tb';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { LuView } from 'react-icons/lu';



const MenuHeaderSide = () => {
    return (
        <div>






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
                <NavLink to="/AllPages" >
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
                </NavLink>
                {/* item  */}

                {/* item  */}
                <NavLink to="/Components" >
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
                </NavLink>
                {/* item  */}

                {/* item  */}
                <NavLink to="/MyCards" >
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
                </NavLink>
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










        </div>
    )
}

export default MenuHeaderSide