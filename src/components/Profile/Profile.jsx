import React from 'react';
import PersonalData from '../PersonalData/PersonalData';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../assets/images/user.jpg'
import style from './Profile.module.css'

const Profile = (props) => {

    let state = props.profileData;

    let profileElements = state.personalData.map(d => <PersonalData key={d.id} name={d.name} surname={d.surname}
        position={d.position} email={d.email} telephon={d.telephon} />);
    return (
        <div>
            <div>
                <ProfileStatus status={state.statusShow.status}
                    statusText={props.statusText} updateStatusText={props.updateStatusText} />
            </div>
            <div><img src={userPhoto} className={style.avatat} alt="" /></div>
            <div> {profileElements} </div>
        </div>
    )
}

export default Profile;