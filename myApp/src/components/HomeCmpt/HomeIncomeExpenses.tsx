import React from 'react'

const HomeIncomeExpenses = () => {
  return (
    <div>
        <div className="HomeIncomeExpensesRow">
            <div className="HomeIncomeExpensesRowCol">
                <p>Income</p>
                <h2 className='IncomeInfoColor1' >$ 552.95</h2>
            </div>
            <div className="HomeIncomeExpensesRowCol">
                <p>Expenses</p>
                <h2 className='IncomeInfoColor2' >$ 86.45</h2>
            </div>
        </div>

        <div className="HomeIncomeExpensesRow">
            <div className="HomeIncomeExpensesRowCol">
                <p>Total Bills</p>
                <h2 className='IncomeInfoColor3' >$ 53.25</h2>
            </div>
            <div className="HomeIncomeExpensesRowCol">
                <p>Savings</p>
                <h2 className='IncomeInfoColor4' >$ 120.99</h2>
            </div>
        </div>
    </div>
  )
}

export default HomeIncomeExpenses