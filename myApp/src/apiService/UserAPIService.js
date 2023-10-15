import axios from "axios";
import { Storage } from '@capacitor/storage';
import { setToken, setUserDetails } from "../SessionHelper/SessionHelper";
// import { Storage } from '@capacitor/storage';

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
      Photo: "imga.link",
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

      const UserEmail = result.data.data.UserEmail
      const FirstName = result.data.data.FirstName
      const LastName = result.data.data.LastName
      const Title = result.data.data.Title
      const Mobile = result.data.data.Mobile
      const Photo = result.data.data.Photo
      const Token = result.data.Token

      Storage.set({
        key: "UserEmail",
        value: UserEmail
      });
      Storage.set({
        key: "FirstName",
        value: FirstName
      });
      Storage.set({
        key: "LastName",
        value: LastName
      });
      Storage.set({
        key: "Title",
        value: Title
      });
      Storage.set({
        key: "Mobile",
        value: Mobile
      });
      Storage.set({
        key: "Photo",
        value:Photo
      });
      Storage.set({
        key: "Token",
        value:Token
      });

      return true;

    } else {

      console.log("Fail User Register from > UserRegister > try > else")

      return false;
    }
  } catch (e) {

    console.log("Fail User Register from > UserRegister > catch block")

    return false;
  }
}

