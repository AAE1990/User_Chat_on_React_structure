import React from 'react';
import style from './MenuBlock.module.css'
import ProfileContainer from '../Profile/ProfileContainer';

const MenuBlock = () => {
    return (
        <div className={style.menuBlock} >
            <ProfileContainer />
        </div>

    )
}

export default MenuBlock;