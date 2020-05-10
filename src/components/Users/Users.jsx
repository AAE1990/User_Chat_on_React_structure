import React from 'react';
import UsersItem from "./UsersItem";
import style from "./Users.module.css"

const Users = (props) => {

    let state = props.usersData;

    let usersElements = state.users.map(u => <UsersItem key={u.id} name={u.name} />);

    return (
        <div className={style.usersBlock}>
            <span className={style.userFont}>
                {usersElements}
            </span>
        </div>
    )
}

export default Users;