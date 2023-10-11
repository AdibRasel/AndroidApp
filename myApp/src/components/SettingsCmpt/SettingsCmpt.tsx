import React from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { chevronForward, listCircle } from 'ionicons/icons';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./SettingsCmpt.css"

import Profile from "../../assets/img/sample/avatar/avatar1.jpg"
import DashBoardHome from '../HomeCmpt/HomeDashBoard';
import HomeIncomeExpenses from '../HomeCmpt/HomeIncomeExpenses';
import SettingsCmptItems from './SettingsCmptItems';

const SettingsCmpt = () => {
  return (
    <div>
      <IonToolbar>
        <IonTitle className='text-center'>Settings</IonTitle>
      </IonToolbar>



      <div className="SettingProfile">
        <div className="SettingProfileImg">
          <img src={Profile} alt="" />
          <div className="SettingProfileActive"></div>
          {/* <div className="SettingProfileDeActive"></div> */}
        </div>

        <h2>Sebastian Doe</h2>
        <span>Student</span>

      </div>



      <HomeIncomeExpenses />





      <SettingsCmptItems />











    </div>
  )
}

export default SettingsCmpt