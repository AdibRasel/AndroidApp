import { NavLink } from 'react-router-dom';

import "./Footer.css"

import { AiOutlineHome } from 'react-icons/ai';
import { TfiSettings } from 'react-icons/tfi';
import { ImPagebreak } from 'react-icons/im';
import { TbComponents } from 'react-icons/tb';
import { AiOutlineCreditCard, AiFillSetting } from 'react-icons/ai';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <div className='BottomTabFooter'>


            <Navbar expand="lg" className=" fixed-bottom BottomTabMenu">
                <Container fluid className="">
                  

                    <div className="BottomTabMenuItem">
                        <NavLink to="/home" className="">
                            <AiOutlineHome className='FooterIcon' /> <br />
                            Home
                        </NavLink>
                    </div>

                    <div className="BottomTabMenuItem">
                        <NavLink to="/AllPages">
                            <ImPagebreak className='FooterIcon' /> <br />
                            Page
                        </NavLink>
                    </div>

                    {/* <div className="BottomTabMenuItem">
                        <NavLink to="/Components">
                        <TbComponents className='FooterIcon' /> <br />
                            Components
                        </NavLink>
                    </div> */}


                    <div className="BottomTabMenuItem">
                        <NavLink to="/Components">
                        <TbComponents className='FooterIcon' /> <br />
                        Transaction
                        </NavLink>
                    </div>
                    
                    <div className="BottomTabMenuItem">
                        <NavLink to="/MyCards">
                        <AiOutlineCreditCard className='FooterIcon' /> <br />
                            MyCards
                        </NavLink>
                    </div>

                    <div className="BottomTabMenuItem">
                        <NavLink to="/Settings">
                        <TfiSettings className='FooterIcon' /> <br />
                        Setting
                        </NavLink>
                    </div>


                </Container>
            </Navbar>










        </div>
    )
}

export default Footer