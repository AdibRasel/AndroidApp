import axios from "axios";
import React, { useRef } from 'react';
import LoginBtn from './LoginBtn';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { useNavigate } from 'react-router-dom';

import { UserRegister } from "../../apiService/UserAPIService.js"


const RegisterCmpt: React.FC = () => {
    const FirstNameRef = useRef<HTMLInputElement>(null);
    const LasttNameRef = useRef<HTMLInputElement>(null);
    const TitleRef = useRef<HTMLInputElement>(null);
    const MobileRef = useRef<HTMLInputElement>(null);
    const EmailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);
    const history = useHistory(); // Initialize useHistory

    // let navigate = useNavigate();

    // Save Button start
    const RegisterBtn = () => {
        if (
            FirstNameRef.current &&
            LasttNameRef.current &&
            TitleRef.current &&
            MobileRef.current &&
            EmailRef.current &&
            PasswordRef.current
        ) {
            const FirstName = FirstNameRef.current.value;
            const LasttName = LasttNameRef.current.value;
            const Mobile = MobileRef.current.value;
            const Title = TitleRef.current.value;
            const Email = EmailRef.current.value;
            const Password = PasswordRef.current.value;

            // Check if each input field has at least 3 characters
            if (FirstName.length < 3) {
                alert("First Name must have at least 3 characters.");
            } else if (LasttName.length < 3) {
                alert("Last Name must have at least 3 characters.");
            } else if (Mobile.length < 3) {
                alert("Mobile must have at least 3 characters.");
            } else if (Title.length < 3) {
                alert("Title must have at least 3 characters.");
            } else if (Email.length < 3) {
                alert("Email must have at least 3 characters.");
            } else if (Password.length < 3) {
                alert("Password must have at least 3 characters.");
            } else {


                UserRegister(FirstName, LasttName, Mobile, Title, Email, Password).then((Res) => {

                    if (Res === true) {
                        alert("Register Success")
                        history.push('/Login');


                    } else {

                        alert('Register faild')
                        console.log(Res)


                    }

                })

            }
        }
    };




    return (
        <div className='RegisterCmptBox'>
            <LoginBtn />
            <div id="appCapsule">
                <div className="section mt-2 text-center">
                    <h2>Register now</h2>
                    <p>Create an account</p>
                </div>
                <div className="section mb-5 p-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">First Name</label>
                                    <input
                                        ref={FirstNameRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="Your First Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">Last Name</label> {/* Fixed typo here */}
                                    <input
                                        ref={LasttNameRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">Title</label>
                                    <input
                                        ref={TitleRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                            </div>
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">Mobile</label>
                                    <input
                                        ref={MobileRef}
                                        type="text"
                                        className="form-control"
                                        placeholder="Mobile"
                                    />
                                </div>
                            </div>
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">E-mail</label>
                                    <input
                                        ref={EmailRef}
                                        type="email"
                                        className="form-control"
                                        placeholder="Your e-mail"
                                    />
                                </div>
                            </div>
                            <div className="form-group basic">
                                <div className="input-wrapper">
                                    <label className="label">Password</label>
                                    <input
                                        ref={PasswordRef}
                                        type="password"
                                        className="form-control"
                                        placeholder="Your password"
                                    />
                                </div>
                            </div>
                            <div className="custom-control custom-checkbox mt-2 mb-1">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheckb1" />
                                    <label className="form-check-label">
                                        I agree <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and
                                            conditions</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-button-group transparent m-3 d-grid gap-2 mt-4 bg-white">
                        <button onClick={RegisterBtn} type="submit" className="btn btn-primary btn-block">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCmpt;
