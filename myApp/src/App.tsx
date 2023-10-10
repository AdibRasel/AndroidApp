import { Redirect, Route, Switch } from 'react-router-dom';
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
import "./assets/css/index.css"
import TransportAllowancePg from './pages/TransportAllowancePg/TransportAllowancePg';
import TravelPlaces from './components/TransportAllowanceCmpt/From/TravelPlaces/TravelPlaces';
import TravelVisit from './components/TransportAllowanceCmpt/From/TravelVisit/TravelVisit';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route exact path="/home"> <HomePg /> </Route>
        <Route exact path="/"> <Redirect to="/home" /> </Route>

        <Route exact path="/Overview"> <OverviewPg /> </Route>
        <Route exact path="/AllPages"> <AllPagesPg /> </Route>
        <Route exact path="/Components"> <ComponentsPg /> </Route>
        <Route exact path="/MyCards"> <MyCardsPg /> </Route>
        <Route exact path="/Settings"> <SettingsPg /> </Route> 
        <Route exact path="/TransportAllowance"> <TransportAllowancePg /> </Route> 
        <Route exact path="/TravelPlaces"> <TravelPlaces /> </Route> 
        <Route exact path="/TravelVisit"> <TravelVisit /> </Route> 
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
