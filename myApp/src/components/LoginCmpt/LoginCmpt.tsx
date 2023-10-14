import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import {LoginRequest} from "../../apiService/UserAPIService"
import "./LoginCmpt.css"

const LoginCmpt = () => {

   const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);



  // Login Button 
  const LoginButton  = () => {
    if (
      EmailRef.current &&
      PasswordRef.current
    ) {
      const Email = EmailRef.current.value;
      const Password = PasswordRef.current.value;

      // Check if each input field has at least 3 characters
      if (Email.length < 3) {
        alert("Email must have at least 3 characters.");
      } else if (Password.length < 3) {
        alert("Password must have at least 3 characters.");
      } else {


        LoginRequest(Email, Password).then((Res) => {

          if (Res === true) {
            alert("Login Success ok")
            // navigate('/login');
            // console.log(Res)

          } else {

            alert('Login Faild faild')
            // console.log(Res)


          }

        })


        // Proceed with registration
        // console.log("Registration successful.");
      }
    }
  };








  return (
    <>

      <div id="appCapsule" className=' mt-5'>

        <div className="section mt-2 text-center">
          <h2> Log in </h2>
          <p>Fill the form to log in</p>
        </div>
        <div className="section mb-5 p-2">
          <div className="card">
            <div className="card-body">

              <div className="form-group basic">
                <div className="input-wrapper">
                  <label className="label">E-mail</label>
                  <input ref={EmailRef} type="email" className="form-control" id="email1" placeholder="Your e-mail" />
                </div>
              </div>

              <div className="form-group basic">
                <div className="input-wrapper">
                  <label className="label" >Password</label>
                  <input ref={PasswordRef} type="password" className="form-control" id="password1" placeholder="Your password" />
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



          <div className="d-flex m-2">
            <div className="">
              <NavLink to="/Register" className="">
                Register Now
              </NavLink>
            </div>
            <div className="Login_forgot_ps">
              <NavLink to="/home" className="">
                Forgot Password?
              </NavLink>
            </div>
          </div>








          {/* fixed-bottom  */}
          {/* <NavLink to="/Login"> */}
          <div className="form-button-group transparent  m-3 d-grid gap-2 mt-4 bg-white">
            <button onClick={LoginButton} type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
          {/* </NavLink> */}

        </div>

      </div>


    </>
  )
}

export default LoginCmpt