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

const SettingsCmpt = () => {
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-center'>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>



      <Card className="text-center">
        <Card.Body>

          <div className="SettingProfile">
            <div className="SettingProfileImg">
              <img src={Profile} alt="" />
              <div className="SettingProfileActive"></div>
              {/* <div className="SettingProfileDeActive"></div> */}
            </div>

            <h2>Sebastian Doe</h2>
            <span>Student</span>

          </div>


        </Card.Body>
      </Card>


<HomeIncomeExpenses />


      <IonList inset={true}>
        <IonItem button={true}>
          <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
          <IonLabel>General</IonLabel>
          <IonNote slot="end">6</IonNote>
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
          <IonLabel>Profile Settings</IonLabel>
          {/* <IonNote slot="end">15</IonNote> */}
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
          <IonLabel>Security</IonLabel>
          <IonNote slot="end">3</IonNote>
        </IonItem>
        <IonItem button={true}>
          <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
          <IonLabel>Notifications</IonLabel>
          {/* <IonNote slot="end">8</IonNote> */}
        </IonItem>
      </IonList>














    </div>
  )
}

export default SettingsCmpt