import React from 'react'
import {
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import HomeCards from '../HomeCmpt/HomeCards';
import HomeSendMoney from '../HomeCmpt/HomeSendMoney';
import HomeMonthlyBills from '../HomeCmpt/HomeMonthlyBills';
import HomeSavingGoals from '../HomeCmpt/HomeSavingGoals';
import HomeLastestNews from '../HomeCmpt/HomeLastestNews';



const MyCardsCmpt = () => {
  return (
    <div>

      <IonHeader>
        <IonToolbar>
          <IonTitle className='text-center'>My Cards </IonTitle>
        </IonToolbar>
      </IonHeader>


      <HomeCards />

      <HomeSavingGoals />

      <HomeMonthlyBills />

      <HomeSendMoney />

      <HomeLastestNews />



    </div>
  )
}

export default MyCardsCmpt