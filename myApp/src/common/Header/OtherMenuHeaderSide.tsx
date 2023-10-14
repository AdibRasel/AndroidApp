import { NavLink } from 'react-router-dom';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { CiSettings } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';



const OtherMenuHeaderSide = () => {
    return (
        <div className='OtherMenuHeaderSideEnd'>






            {/* Header Other Menu start  */}
            <div className="HeaderContentMenu">

                <p>Others</p>

                {/* item  */}
                <NavLink to="/Settings" >
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
                </NavLink>
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
                <NavLink to="/Login" >
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
                </NavLink>
                {/* item  */}

            </div>
            {/* Header Other Menu end */}






        </div>
    )
}

export default OtherMenuHeaderSide