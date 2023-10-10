

import AlPagesCmptCryptocurrency from "./AlPagesCmptCryptocurrency";
import AllPagesCmptAuthentication from "./AllPagesCmptAuthentication";
import AllPagesCmptOthers from "./AllPagesCmptOthers";
import AllPagesCmptPagesSection from "./AllPagesCmptPagesSection"
import "./AllPagesCmt.css"

import {
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronForward, listCircle } from 'ionicons/icons';


const AllPagesCmpt = () => {
  return (
    <div>

      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-center'>Pages</IonTitle>
        </IonToolbar>
      </IonHeader>



      <AllPagesCmptPagesSection />


      <AlPagesCmptCryptocurrency />


      <AllPagesCmptAuthentication />
      

      <AllPagesCmptOthers />









    </div>
  )
}

export default AllPagesCmpt