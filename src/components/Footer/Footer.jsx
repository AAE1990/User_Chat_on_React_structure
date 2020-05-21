import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footerDesign}>
            <div className={style.underMenuBlock} ></div>
            <div className={style.underShowMessage} ></div>
            <div className={style.underShowMessageTwo} ></div>
        </div>
    )
}

export default Footer;