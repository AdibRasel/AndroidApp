import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/react';


import {BsFillArrowRightCircleFill } from 'react-icons/bs';

import { CiSettings } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';


import { AiFillHome } from 'react-icons/ai';
import { FaCoins } from 'react-icons/fa';
import { RiExchangeBoxLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { BiTransferAlt } from 'react-icons/bi';





import { AiOutlineCaretRight } from 'react-icons/ai';
// import { BiTransferAlt } from 'react-icons/bi';


import { CgDetailsMore } from 'react-icons/cg';
import { BsFillPinMapFill } from 'react-icons/bs';
import { RiContactsBookUploadFill } from 'react-icons/ri';
import { FaQuoteRight } from 'react-icons/fa';
import { TbError404Off } from 'react-icons/tb';
import { FaUnsplash } from 'react-icons/fa';
import { BiSolidImageAlt } from 'react-icons/bi';




const AllPagesCmptOthers = () => {
  return (
    <div className='AllPagesCmptSection'>



    <p>Others</p>


    {/* <IonList inset={true}> */}
    <IonList>


        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <RiContactsBookUploadFill />
                </div>

                <IonLabel>About Page </IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}


        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <BsFillPinMapFill />
                </div>

                <IonLabel>Contact= </IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}


        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <FaQuoteRight />
                </div>

                <IonLabel>FAQ </IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}


        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <TbError404Off />
                </div>

                <IonLabel>404 </IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}


        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <FaUnsplash />
                </div>

                <IonLabel>Splash Icon  </IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}

        {/* item start  */}
        <NavLink to="/home" className="AllPagesCmptPageSectionItem">
            <IonItem button={true}>

                <div slot="start" className="AllPagesCmptOthersIcon">
                    <BiSolidImageAlt />
                </div>

                <IonLabel>Splash Image</IonLabel>

                <div slot="end" className="AllPagesCmptOthersIconRightArraw">
                    <AiOutlineCaretRight />
                </div>
            </IonItem>
        </NavLink>
        {/* item end  */}






    </IonList>







</div>
  )
}

export default AllPagesCmptOthers