import { connect } from "react-redux";
import InputFloodChat from "./InputFloodChat";
import { floodChatCreator, deleteMessageCreator} from "../../../redux/floodChat-reduser";

const mapStateToProps = (state) => {
    return {
        floodChatData: state.floodChatData
    }
  }


const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newTextMessage) => {
            dispatch(floodChatCreator(newTextMessage));
        },
        deleteMessage: (newTextMessage) => {
            dispatch(deleteMessageCreator(newTextMessage));
        } 
    }
 }



const FloodChatContainer = connect(mapStateToProps, mapDispatchToProps) (InputFloodChat);

export default FloodChatContainer;