import { connect } from "react-redux"
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersData
    }
}

export default connect(mapStateToProps, ) (Users);