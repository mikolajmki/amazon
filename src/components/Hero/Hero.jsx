import React from "react";
import css from './Hero.module.css';
import HeroImage from '../../assets/hero.png';
import { BiShoppingBag } from 'react-icons/bi';

export const Hero = () => {
    return (
        <div className={css.container}>
            
            <div className={css.leftSide}>
                <span>skin protection cream</span>

                <div className={css.text2}>
                    <span>Special collection</span>
                    <span>Lorem ipsum dolor aet</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img className={css.heroImage} src={HeroImage} alt="" />
                <div className={css.cart2}>
                    <BiShoppingBag/>
                    <div className={css.signup}>
                        <span>Best signup offers</span>

                        <div>
                            {/* <BsArrowRight/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}