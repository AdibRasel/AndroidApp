import React from 'react'
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
  return (
    <div>

      {/* DashBoardHome start  */}
      <DashBoardHome />
      {/* DashBoardHome end  */}


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