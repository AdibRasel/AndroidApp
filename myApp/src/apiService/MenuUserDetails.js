import axios from "axios";
import { Storage } from "@capacitor/storage";

const BaseURL = "http://localhost:5000/api/v1";

export async function MenuUserDetails() {
  try {
    // Retrieve the user's token and email from storage
    const tokenItem = await Storage.get({ key: "Token" });
    const emailItem = await Storage.get({ key: "UserEmail" });

    if (tokenItem.value) {
      // Access the user's token and email directly from tokenItem.value and emailItem.value
      const userToken = tokenItem.value;
      const userEmail = emailItem.value;

      // Define the Axios headers with the user's token and email
      const AxiosHeader = { headers: { token: userToken, email: userEmail } };

      // Make the API request with the headers
      const URL = BaseURL + "/UserDetails";
      const res = await axios.get(URL, AxiosHeader);

      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      } else {
        // Handle the error case
        console.log("Error in response");
        return null;
      }
    } else {
      // Handle the case where the token is not available in storage
      console.log("Token not found in storage");
      return null;
    }
  } catch (e) {
    // Handle any exceptions
    console.error("Error:", e);
    return null;
  }
}
