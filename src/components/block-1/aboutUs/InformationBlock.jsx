import React from 'react';
import style from './InformationBlock.module.css';
import block1 from '../../../img/3.svg';
import block2 from '../../../img/2.svg';
import block3 from '../../../img/1.svg';

const InformationBlock = () => {
    return (
        <div className={style.blockAboutUs}>
            <div className={style.titleAboutUs}>
                <div>Кто мы?</div>
            </div>
            <div className={style.aboutUsContainer}>
                {[
                    { img: block1, text: 'Мы любим животных и хотим им помогать!' },
                    { img: block2, text: 'Наша задача сделать город добрым!' },
                    { img: block3, text: 'У нас вы вы сразу можете выбрать им подарки!' }
                ].map((block => {
                    return (
                        <div className={style.block1}>
                            <div className={style.icon}><img src={block.img} alt=''></img></div>
                            <div className={style.text}>
                                {block.text}
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}


export default InformationBlock;