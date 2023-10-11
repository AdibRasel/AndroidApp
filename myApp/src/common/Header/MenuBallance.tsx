import { NavLink } from 'react-router-dom';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { BsSend, BsFillCreditCard2FrontFill } from 'react-icons/bs';





const MenuBallance = () => {
    return (
        <div>












            {/* Menu Ballance start  */}
            <div className="MenuBalance">

                <p>Balance</p>
                <h2>$ 2,562.50</h2>

                <div className="MenuBalanceItemBox">


                    <div className="MenuBalanceItem">
                        <GiPayMoney className='MenuBalanceItemIcon' />
                        <p>Deposit </p>
                    </div>

                    <div className="MenuBalanceItem">
                        <GiReceiveMoney className='MenuBalanceItemIcon' />
                        <p>Withdraw</p>
                    </div>

                    <div className="MenuBalanceItem">
                        <BsSend className='MenuBalanceItemIcon' />
                        <p>Send</p>
                    </div>

                    <div className="MenuBalanceItem">
                        <BsFillCreditCard2FrontFill className='MenuBalanceItemIcon' />
                        <p>Cards</p>
                    </div>

                </div>


            </div>
            {/* Menu Ballance end  */}











        </div>
    )
}

export default MenuBallance