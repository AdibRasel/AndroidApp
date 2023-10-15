import React from 'react'
import { Storage } from '@capacitor/storage';

import "./HomeCmpt.css"
import DashBoardHome from './HomeDashBoard'
import HomeIncomeExpenses from './HomeIncomeExpenses'
import HomeTransactions from './HomeTransactions'
import HomeCards from './HomeCards'
import HomeSendMoney from './HomeSendMoney'
import HomeMonthlyBills from './HomeMonthlyBills'
import HomeSavingGoals from './HomeSavingGoals'
import HomeLastestNews from './HomeLastestNews'
import HomeFooter from './HomeFooter'

const HomeCmpt = () => {
  
  const test = () => {









    Storage.set({
      key: "name",
      value: 'Rasel Hossain Adib . Amader deshe hobe sei chele kobe kothai na bro hoye kaje bro hobe?'
    });


    Storage.get({ key: "name" }).then((item) => {
      if (item) {
        console.log(item.value)
      }
      else {
        console.log("Storage item not found")
      }
    });












  }

  return (
    <div>




      {/* DashBoardHome start  */}
      <DashBoardHome />
      {/* DashBoardHome end  */}


      <div className="text-center m-5">

        <button onClick={test} className='text-center m-auto btn btn-success'>Hello</button>
      </div>




      {/* Home Income Expenses Total Bills Savings start  */}
      <HomeIncomeExpenses />
      {/* Home Income Expenses Total Bills Savings end */}


      {/* Home Transactions start  */}
      <HomeTransactions />
      {/* Home Transactions end  */}


      {/* Home Cards start  */}
      <HomeCards />
      {/* Home Cards end  */}


      {/* Home Send Money start */}
      <HomeSendMoney />
      {/* Home Send Money end */}


      {/* Home Monthly Bills start*/}
      <HomeMonthlyBills />
      {/* Home Monthly Bills end*/}


      {/* Home Saving Goals start  */}
      <HomeSavingGoals />
      {/* Home Saving Goals end  */}



      {/* Home Lastest News start  */}
      <HomeLastestNews />
      {/* Home Lastest News end */}



      {/* HomeFooter start  */}
      <HomeFooter />
      {/* HomeFooter end */}




    </div>
  )
}

export default HomeCmpt