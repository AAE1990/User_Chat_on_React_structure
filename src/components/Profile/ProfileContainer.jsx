import { connect } from "react-redux"
import Profile from "./Profile";
import {setStatusText} from '../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData,
        statusText: state.profileData.statusText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateStatusText: (statusText) => {
            dispatch(setStatusText(statusText));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;