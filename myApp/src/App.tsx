import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuUserDetails } from "./apiService/MenuUserDetails.js"



import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import HomePg from './pages/HomePg/HomePg';
import OverviewPg from './pages/OverviewPg/OverviewPg';
import AllPagesPg from './pages/AllPagesPg/AllPagesPg';
import ComponentsPg from './pages/ComponentsPg/ComponentsPg';
import MyCardsPg from './pages/MyCardsPg/MyCardsPg';
import SettingsPg from './pages/SettingsPg/SettingsPg';

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

// index css 
// Finapp Css Linkup
// import "./assets/css/style.css"
import "./assets/css/index.css"
import TransportAllowancePg from './pages/TransportAllowancePg/TransportAllowancePg';
import TravelPlacesForm from './components/TransportAllowanceCmpt/From/TravelPlaces/TravelPlacesForm';
import TravelVisitForm from './components/TransportAllowanceCmpt/From/TravelVisit/TravelVisitForm';
import TransactionsPg from './pages/Transactions Pg/TransactionsPg';
import TransactionDetails from './components/TransactionsCmpt/TransactionDetails/TransactionDetails';
import NotificationPg from './pages/NotificationPg/NotificationPg';
import RegisterPg from './pages/RegisterPg/RegisterPg';
import LoginPg from './pages/LoginPg/LoginPg';
import TransportAllowanceListPg from './pages/TransportAllowanceListPg/TransportAllowanceListPg';
import TravelPlacesList from './components/TransportAllowanceListCmpt/TravelPlacesList/TravelPlacesList';
import TravelVisitList from './components/TransportAllowanceListCmpt/TravelVisitList/TravelVisitList';
import { Storage } from '@capacitor/storage'; // Import Storage from Capacitor

setupIonicReact();

// const App: React.FC = () => {



//   const [UserName, SetUserName] = useState('');
//   const [UserImage, SetImage] = useState('');

//   useEffect(() => {
//     MenuUserDetails().then((Response) => {
//       SetUserName(Response.data[0].FirstName);
//       SetImage(Response.data[0].Photo);
//       console.log("Response");
//       console.log(Response.data[0].FirstName);
//       console.log("User Name = " + Response.data[0].FirstName)
//     });
//   }, []);



//   // Retrieve the user's token and email from storage
//   const tokenItem = Storage.get({ key: "Token" });
//   const emailItem = Storage.get({ key: "UserEmail" });

//   if (tokenItem.value) {
//     // Access the user's token and email directly from tokenItem.value and emailItem.value
//     const userToken = tokenItem.value;
//     const userEmail = emailItem;



//   } else {
//     // Handle the case where the token is not available in storage
//     console.log("Token not found in storage");
//     return null;
//   }










//   // Replace this with your actual authentication logic
//   const GetToken = false;



//   if (tokenItem.value === UserName) {
//     return (
//       <IonApp>
//         <IonReactRouter>
//           <Switch>
//             <Route exact path="/Login"> <LoginPg /> </Route>
//             <Route exact path="/Register"> <RegisterPg /> </Route>
//           </Switch>
//         </IonReactRouter>
//       </IonApp>
//     )
//   } else {
//     return (
//       <IonApp>
//         <IonReactRouter>
//           <Switch>


//             <Route exact path="/home"> <HomePg /> </Route>
//             <Route exact path="/"> <Redirect to="/home" /> </Route>

//             <Route exact path="/Overview"> <OverviewPg /> </Route>
//             <Route exact path="/AllPages"> <AllPagesPg /> </Route>
//             <Route exact path="/Components"> <ComponentsPg /> </Route>
//             <Route exact path="/MyCards"> <MyCardsPg /> </Route>
//             <Route exact path="/Settings"> <SettingsPg /> </Route>
//             <Route exact path="/TransportAllowance"> <TransportAllowancePg /> </Route>
//             <Route exact path="/TravelPlaces"> <TravelPlacesForm /> </Route>
//             <Route exact path="/TravelVisit"> <TravelVisitForm /> </Route>
//             <Route exact path="/Transactions"> <TransactionsPg /> </Route>
//             <Route exact path="/TransactionDetails"> <TransactionDetails /> </Route>
//             <Route exact path="/Notification"> <NotificationPg /> </Route>

//             <Route exact path="/TransportListPage"> <TransportAllowanceListPg /> </Route>
//             <Route exact path="/TravelPlacesList"> <TravelPlacesList /> </Route>
//             <Route exact path="/TravelVisitList"> <TravelVisitList /> </Route>


//           </Switch>
//         </IonReactRouter>
//       </IonApp>
//     );
//   }
// };
// export default App;







// const App: React.FC = () => {
//   const [userToken, setUserToken] = useState('');
//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const tokenItem = await Storage.get({ key: "Token" });
//         if (tokenItem.value) {
//           setUserToken(tokenItem.value);
//         }
//       } catch (error) {
//         console.error("Error retrieving token or user data", error);
//       }
//     };

//     getUserData();
//   }, []);
//   // !userToken
//   if (0 === 0) {
//     return (
//       <IonApp>
//         <IonReactRouter>
//           <Switch>
//             <Route exact path="/Login"> <LoginPg /> </Route>
//             <Route exact path="/Register"> <RegisterPg /> </Route>
//           </Switch>
//         </IonReactRouter>
//       </IonApp>
//     );
//   } else {
//     return (
//       <IonApp>
//         <IonReactRouter>
//           <Switch>
//             {/* Add protected routes here */}
//             <Route exact path="/home"> <HomePg /> </Route>
//             <Route exact path="/Overview"> <OverviewPg /> </Route>
//             <Route exact path="/AllPages"> <AllPagesPg /> </Route>
//             <Route exact path="/Components"> <ComponentsPg /> </Route>
//             <Route exact path="/MyCards"> <MyCardsPg /> </Route>
//             <Route exact path="/Settings"> <SettingsPg /> </Route>
//             <Route exact path="/TransportAllowance"> <TransportAllowancePg /> </Route>
//             <Route exact path="/TravelPlaces"> <TravelPlacesForm /> </Route>
//             <Route exact path="/TravelVisit"> <TravelVisitForm /> </Route>
//             <Route exact path="/Transactions"> <TransactionsPg /> </Route>
//             <Route exact path="/TransactionDetails"> <TransactionDetails /> </Route>
//             <Route exact path="/Notification"> <NotificationPg /> </Route>
//             <Route exact path="/TransportListPage"> <TransportAllowanceListPg /> </Route>
//             <Route exact path="/TravelPlacesList"> <TravelPlacesList /> </Route>
//             <Route exact path="/TravelVisitList"> <TravelVisitList /> </Route>
//             {/* ... other protected routes ... */}
//           </Switch>
//         </IonReactRouter>
//       </IonApp>
//     );
//   }
// };
// export default App;











// return (
//   <IonApp>
//     <IonReactRouter>
//       <Switch>
//         <Route exact path="/Login"> <LoginPg /> </Route>
//         <Route exact path="/Register"> <RegisterPg /> </Route>


//         {userToken && userToken === userToken ? (
//           // User is authenticated, show the protected routes
//           <>
//             {/* Add protected routes here */}
//             <Route exact path="/home"> <HomePg /> </Route>


//             <Route exact path="/Overview"> <OverviewPg /> </Route>
//             <Route exact path="/AllPages"> <AllPagesPg /> </Route>
//             <Route exact path="/Components"> <ComponentsPg /> </Route>
//             <Route exact path="/MyCards"> <MyCardsPg /> </Route>
//             <Route exact path="/Settings"> <SettingsPg /> </Route>
//             <Route exact path="/TransportAllowance"> <TransportAllowancePg /> </Route>
//             <Route exact path="/TravelPlaces"> <TravelPlacesForm /> </Route>
//             <Route exact path="/TravelVisit"> <TravelVisitForm /> </Route>
//             <Route exact path="/Transactions"> <TransactionsPg /> </Route>
//             <Route exact path="/TransactionDetails"> <TransactionDetails /> </Route>
//             <Route exact path="/Notification"> <NotificationPg /> </Route>

//             <Route exact path="/TransportListPage"> <TransportAllowanceListPg /> </Route>
//             <Route exact path="/TravelPlacesList"> <TravelPlacesList /> </Route>
//             <Route exact path="/TravelVisitList"> <TravelVisitList /> </Route>



//             {/* ... other protected routes ... */}
//           </>
//         )

//           :

//           (
//             // User is not authenticated, redirect or show public routes
//             <Redirect to="/Login" />



//           )}
//       </Switch>
//     </IonReactRouter>
//   </IonApp>
// );

// };

// export default App;




const App: React.FC = () => {
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const tokenItem = await Storage.get({ key: "Token" });
        if (tokenItem.value) {
          setUserToken(tokenItem.value);
        }
      } catch (error) {
        console.error("Error retrieving token or user data", error);
      }
    };

    getUserData();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route exact path="/Login"> <LoginPg /> </Route>
          <Route exact path="/Register"> <RegisterPg /> </Route>

          {userToken ? ( // Check if userToken is truthy
            // User is authenticated, show the protected routes
            <>
              <Route exact path="/home"> <HomePg /> </Route>
              <Route exact path="/Overview"> <OverviewPg /> </Route>
              <Route exact path="/AllPages"> <AllPagesPg /> </Route>
              <Route exact path="/Components"> <ComponentsPg /> </Route>
              <Route exact path="/MyCards"> <MyCardsPg /> </Route>
              <Route exact path="/Settings"> <SettingsPg /> </Route>
              <Route exact path="/TransportAllowance"> <TransportAllowancePg /> </Route>
              <Route exact path="/TravelPlaces"> <TravelPlacesForm /> </Route>
              <Route exact path="/TravelVisit"> <TravelVisitForm /> </Route>
              <Route exact path="/Transactions"> <TransactionsPg /> </Route>
              <Route exact path="/TransactionDetails"> <TransactionDetails /> </Route>
              <Route exact path="/Notification"> <NotificationPg /> </Route>
              <Route exact path="/TransportListPage"> <TransportAllowanceListPg /> </Route>
              <Route exact path="/TravelPlacesList"> <TravelPlacesList /> </Route>
              <Route exact path="/TravelVisitList"> <TravelVisitList /> </Route>
              {/* ... other protected routes ... */}
            </>
          ) : (
            // User is not authenticated, redirect to the Login page
            <Redirect to="/Login" />
          )}
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;