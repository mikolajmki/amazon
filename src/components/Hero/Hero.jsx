import React from "react";
import css from './Hero.module.css';
import HeroImage from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

export const Hero = () => {
    return (
        <div className={css.container}>
            
            <div className={css.side}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Special collection</span>
                    <span>Lorem ipsum dolor aet</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img className={css.heroImage} src={HeroImage} alt="" />
                <div className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best signup offers</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.side}>

                <div className={css.traffic}>

                    <span>100k</span>
                    <span>Monthly traffic</span>
                </div>

                <div className={css.customers}>
                    <span>150k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}