import { connect } from "react-redux";
import InputFloodChat from "./InputFloodChat";
import { floodChatCreator, deleteMessageCreator, /* updateInputCreator */ } from "../../../redux/floodChat-reduser";

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
        },
        /* updateInput: (newTextMessage) => {
            dispatch(updateInputCreator(newTextMessage));
        } */
    }
 }



const FloodChatContainer = connect(mapStateToProps, mapDispatchToProps) (InputFloodChat);

export default FloodChatContainer;