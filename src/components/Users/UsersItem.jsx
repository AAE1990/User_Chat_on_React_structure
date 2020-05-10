import React from 'react';
import style from "./UsersItem.module.css"

const UsersItem = (props) => {
    return (
        <div className={style.nameDessign} >
            {props.name}
        </div>
    )
}

export default UsersItem;