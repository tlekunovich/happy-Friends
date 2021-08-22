import React from 'react';
import style from './GalleryOfFriends.module.css';
import iscorca from './../../../img/p29.png';
import uran from '../../../img/p30.png';
import dumok from '../../../img/p31.png';
import vector1 from '../../../img/Vector 2.svg';
import vector2 from '../../../img/Vector 3.svg';
import sliderDot from '../../../img/per3.svg';

const GalleryOfFriends = () => {

    const animals = [
        { name: 'Искорка', photo: iscorca, age: '6 месяцев', gender: 'девочка' },
        { name: 'Уран', photo: uran, age: '2 года', gender: 'мальчик' },
        { name: 'Дымок', photo: dumok, age: '1,3 года', gender: 'мальчик' }
    ]

    return (
        <div className={style.blockGallery}>

            <div className={style.galleryTitle}>Галерея друзей</div>

            <div className={style.sliderStart}>
                <div className={style.btnForward}>
                    <img src={vector2} alt="" ></img>
                </div>

                <div className={style.animalSlider}>
                    {animals.map((elem) => {
                        return (

                            <div className={style.animalItem}>
                                <img src={elem.photo} alt='' />

                                <div className={style.animalName}>{elem.name}</div>
                                <div className={style.animalNextInf}>{elem.gender}, {elem.age}</div>
                            </div>

                        )
                    })}
                </div>

                <div className={style.btnForward}>
                    <img src={vector1} alt=""></img>
                </div>
            </div>
            
            <img src={sliderDot} className={style.sliderDot} alt=''></img>

        </div>
    )
}


export default GalleryOfFriends;