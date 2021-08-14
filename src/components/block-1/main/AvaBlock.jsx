import React from 'react';
import style from './AvaBlock.module.css';
import ava from '../../../img/abc.png';
import rectangle from '../../../img/Rect.jpg'
import instagram from '../../../img/instagram.svg'
import youtube from '../../../img/youtube.svg'
import facebook from '../../../img/facebook.svg'
import charity from '../../../img/charity.svg'


const AvaBlock = () => {
   
    const socialNetworks = [
        {icon:youtube, href:'#!'},
        {icon:instagram, href:'#!'},
        {icon:facebook, href:'#!'}
    ]
   
    return (

        <div className={style.avaBlock}>

            < img src={ava} alt='' className={style.ava} />


            <div className={style.description}
            // style={{ 
            //     backgroundImage: `url("https://via.placeholder.com/500")` 
            //   }}
            >
                {/* <div className={style.back}> */}
                <div className={style.descriptionTitle}>БЛАГОТВОРИТЕЛЬНОСТЬ</div>
                <div>Помочь приемнику в один клик!</div>
                {/* </div> */}
                <div className={style.socialIcons}>
                {socialNetworks.map((elem)=>{
                   return(
                    <a href={elem.href}><img src={elem.icon} alt='' /></a>
                   )
               })} 
            </div>
            
            
           
            
              
              
            </div>
        </div>
         
    )
}


export default AvaBlock;