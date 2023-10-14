import axios from "axios";

const BaseURL = "http://localhost:5000/api/v1";





// User Register
export async function UserRegister(FirstName, LasttName, Mobile, Title, Email, Password) {
  try {
    const URL = BaseURL + "/UserRegister";
    let PostBody = {
      UserEmail: Email,
      FirstName: FirstName,
      LastName: LasttName,
      Title: Title,
      Mobile: Mobile,
      Password: Password,
    };

    const result = await axios.post(URL, PostBody);

    console.log(result.data.status)

    if (result.data.status === "success") {

      console.log("Success User Register result = ")
      console.log(result)

      return true;
      //   return result;

    } else {

      console.log("Fail User Register from > UserRegister > try > else")

      return false;
    }
  } catch (e) {

    console.log("Fail User Register from > UserRegister > catch block")

    return false;
  }

}


// User Login
export async function LoginRequest(Email, Password) {
  try {
    const URL = BaseURL + "/UserLogin";
    let PostBody = {
      UserEmail: Email,
      Password: Password,
    };

    const result = await axios.post(URL, PostBody);

    console.log(result.data.status)

    if (result.data.status === "Success") {

      // console.log("Success User Register result = ")
      console.log(result)

      return true;
      // return result;
      //   return result;

    } else {

      // console.log("Fail User Register from > UserRegister > try > else")

      return result;
      // return false;
    }
  } catch (e) {

    // console.log("Fail User Register from > UserRegister > catch block")

    return false;
  }
}

