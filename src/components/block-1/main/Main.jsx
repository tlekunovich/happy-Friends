import React from 'react';
import style from './Main.module.css';
import DescriptionBlock from './DescriptionBlock.jsx';
import AvaBlock from './AvaBlock.jsx';

const Main = () => {
    return (
        <div className={style.main}>
            <DescriptionBlock />
            <AvaBlock />
        </div>
    )
}


export default Main;