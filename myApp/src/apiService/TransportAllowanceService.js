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
