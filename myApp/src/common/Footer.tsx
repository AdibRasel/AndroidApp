import { NavLink } from 'react-router-dom';

import "./Footer.css"

import { ImHome } from 'react-icons/im';
import { SiPagekit } from 'react-icons/si';
import { TbComponents } from 'react-icons/tb';
import { AiOutlineCreditCard, AiFillSetting } from 'react-icons/ai';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <div >


            <Navbar expand="lg" className=" fixed-bottom BottomTabMenu">
                <Container fluid className="">
                  

                    <div className="BottomTabMenuItem">
                        <NavLink to="/home" className="">
                            <ImHome className='FooterIcon' /> <br />
                            Home
                        </NavLink>
                    </div>

                    <div className="BottomTabMenuItem">
                        <NavLink to="/AllPages">
                            <SiPagekit className='FooterIcon' /> <br />
                            Page
                        </NavLink>
                    </div>

                    <div className="BottomTabMenuItem">
                        <NavLink to="/Components">
                        <TbComponents className='FooterIcon' /> <br />
                            Components
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
                        <AiFillSetting className='FooterIcon' /> <br />
                            Settings
                        </NavLink>
                    </div>


                </Container>
            </Navbar>










        </div>
    )
}

export default Footer