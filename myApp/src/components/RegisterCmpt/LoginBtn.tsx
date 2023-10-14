import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginBtn = () => {
    return (
        <>
            <div className="LoginBtnRegistration">
                <NavLink to="/Login">

                    <span className='LoginBtnRegistrationTxt btn'>Login</span>

                </NavLink>
            </div>
        </>
    )
}

export default LoginBtn