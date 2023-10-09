import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from '@ionic/react';

import "./Footer.css"

import { ImHome } from 'react-icons/im';
import { SiPagekit } from 'react-icons/si';
import { TbComponents } from 'react-icons/tb';
import { AiOutlineCreditCard, AiFillSetting } from 'react-icons/ai';



const Footer = () => {
    return (
        <div >


            <IonTabs >

                <IonRouterOutlet>
                </IonRouterOutlet>


                <IonTabBar className='' slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <ImHome  className='FooterIcon'/>
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="AllPages" href="/AllPages">
                        <SiPagekit  className='FooterIcon'/>
                        <IonLabel>Page</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="Components" href="/Components">
                        <TbComponents  className='FooterIcon'/>
                        <IonLabel>Components</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="MyCards" href="/MyCards">
                        <AiOutlineCreditCard  className='FooterIcon'/>
                        <IonLabel>MyCards</IonLabel>
                    </IonTabButton>


                    <IonTabButton tab="Settings" href="/Settings">
                        <AiFillSetting  className='FooterIcon'/>
                        <IonLabel>Settings</IonLabel>
                    </IonTabButton>



                </IonTabBar>


            </IonTabs>



        </div>
    )
}

export default Footer