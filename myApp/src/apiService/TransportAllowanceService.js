import axios from "axios";
import { Storage } from '@capacitor/storage'; // Import Storage from Capacitor


const BaseURL = "http://localhost:5000/api/v1";

// Travel Places Create
export async function TravelPlacesCreate(TravelFrom, TravelTo, VehicleName, MuchTime, KmTravel, TotalCost) {
    try {
        const emailItem = await Storage.get({ key: "UserEmail" });
        const tokenItem = await Storage.get({ key: "Token" }); // Retrieve the user's token
        if (tokenItem.value) {

            const URL = BaseURL + "/CreateTravelPlaces";
            let PostBody = {
                TravelFrom: TravelFrom,
                TravelTo: TravelTo,
                VehicleName: VehicleName,
                MuchTime: MuchTime,
                KmTravel: KmTravel,
                TotalCost: TotalCost,
            };
            const AxiosHeader = { headers: { token: tokenItem.value, email: emailItem.value } };

            const result = await axios.post(URL, PostBody, AxiosHeader);
            console.log(result.data.status);

            if (result.data.status === "success") {
                console.log("Travel Places Create Success");
                console.log(result);
                return true;
            } else {
                console.log("Fail Travel Places Create Success from > UserRegister > try > else");
                return false;
            }
        } else {
            // Handle the case where the token is not available in storage
            console.log("Token not found in storage");
            return null;
        }
    } catch (e) {
        console.log("Fail Travel Places Create from > UserRegister > catch block");
        return false;
    }
}


// Travel Places All List
export async function TravelPlacesAllList() {
    try {
        const URL = BaseURL + "/TravelPlacesListAll";


        // Retrieve the user's token and email from storage
        const tokenItem = await Storage.get({ key: "Token" });
        const emailItem = await Storage.get({ key: "UserEmail" });

        if (tokenItem.value) {
            // Access the user's token and email directly from tokenItem.value and emailItem.value
            const userToken = tokenItem.value;
            const userEmail = emailItem.value;

            // Define the Axios headers with the user's token and email
            const AxiosHeader = { headers: { token: userToken, email: userEmail } };


            const result = await axios.get(URL, AxiosHeader);

            if (result.status == 200) {
                console.log("Read Success");
                return result;
            } else {
                console.log("Read Faild, Request Fail ! API Service > Try > if > else");
                return false;
            }


        } else {
            // Handle the case where the token is not available in storage
            console.log("Token not found in storage");
            return null;
        }




    } catch (e) {
        console.log("Read Faild, Request Fail ! API Service > Try > if > else");
        return false;
    }
}













// Travel Visit Create
export async function TravelVisitCreate(OfficeName, OfficeAddress, OfficeEmail, OfficeMobileNumber, PersonName, PersonAddress, PersonEmail, PersonMobileNumber, Remarks) {
    try {
        const emailItem = await Storage.get({ key: "UserEmail" });
        const tokenItem = await Storage.get({ key: "Token" }); // Retrieve the user's token
        if (tokenItem.value) {

            const URL = BaseURL + "/CreateTravelVisit";
            let PostBody = {
                OfficeName: OfficeName,
                OfficeAddress: OfficeAddress,
                OfficeEmail: OfficeEmail,
                OfficeMobileNumber: OfficeMobileNumber,
                PersonName: PersonName,
                PersonAddress: PersonAddress,
                PersonEmail: PersonEmail,
                PersonMobileNumber: PersonMobileNumber,
                Remarks: Remarks,
            };
            const AxiosHeader = { headers: { token: tokenItem.value, email: emailItem.value } };

            const result = await axios.post(URL, PostBody, AxiosHeader);
            console.log(result.data.status);

            if (result.data.status === "success") {
                console.log("Travel Visit Create Success");
                console.log(result);
                return true;
            } else {
                console.log("Fail Travel Visit Create Success from > UserRegister > try > else");
                return false;
            }
        } else {
            // Handle the case where the token is not available in storage
            console.log("Token not found in storage");
            return null;
        }
    } catch (e) {
        console.log("Fail Travel Visit Create from > UserRegister > catch block");
        return false;
    }
}



// Travel Visit All List
export async function TravelVisitAllList() {
    try {
        const URL = BaseURL + "/AllTravelVisitList";


        // Retrieve the user's token and email from storage
        const tokenItem = await Storage.get({ key: "Token" });
        const emailItem = await Storage.get({ key: "UserEmail" });

        if (tokenItem.value) {
            // Access the user's token and email directly from tokenItem.value and emailItem.value
            const userToken = tokenItem.value;
            const userEmail = emailItem.value;

            // Define the Axios headers with the user's token and email
            const AxiosHeader = { headers: { token: userToken, email: userEmail } };


            const result = await axios.get(URL, AxiosHeader);

            if (result.status == 200) {
                console.log("Read Success");
                return result;
            } else {
                console.log("Read Faild, Request Fail ! API Service > Try > if > else");
                return false;
            }


        } else {
            // Handle the case where the token is not available in storage
            console.log("Token not found in storage");
            return null;
        }




    } catch (e) {
        console.log("Read Faild, Request Fail ! API Service > Try > if > else");
        return false;
    }
}


