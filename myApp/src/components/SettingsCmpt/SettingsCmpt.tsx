import React from 'react';
import { useEffect, useState } from 'react';
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

import {MenuUserDetails} from "../../apiService/MenuUserDetails.js"



const SettingsCmpt = () => {


  const [UserName, SetUserName] = useState('');
  const [UserImage, SetImage] = useState('');


  useEffect(() => {
    MenuUserDetails().then((Response) => {
      SetUserName(Response.data[0].FirstName);
      SetImage(Response.data[0].Photo);
      console.log("Response");
      console.log(Response.data[0].FirstName);
    });
  }, []);

  return (
    <div>
      <IonToolbar>
        <IonTitle className='text-center'>Settings</IonTitle>
      </IonToolbar>



      <div className="SettingProfile">
        <div className="SettingProfileImg">
          <img src={UserImage} alt="" />
          <div className="SettingProfileActive"></div>
          {/* <div className="SettingProfileDeActive"></div> */}
        </div>

        <h2>{UserName}</h2>
        <span>Student</span>

      </div>



      <HomeIncomeExpenses />





      <SettingsCmptItems />











    </div>
  )
}

export default SettingsCmpt