import React from 'react';
import style from './PersonalData.module.css'

const PersonalData = (props) => {
    return (
        <div>
            <div className={style.blockInfoUser} >
                <div>
                    <span className={style.markName}>User-name: </span>
                    <span> {props.name} </span>
                    <span> {props.surname} </span>
                </div>
                <div>
                    <span className={style.markName}>Position: </span><span>{props.position}</span>
                </div>
                <div>
                    <span className={style.markName}>email: </span><a href="mailto: loonyp2010@gmail.com"> {props.email} </a>
                </div>
                <div>
                    <span className={style.markName}>telephon: </span><a href="tel: +79193639610"> {props.telephon} </a>
                </div>
            </div>
        </div>
    )
}

export default PersonalData;