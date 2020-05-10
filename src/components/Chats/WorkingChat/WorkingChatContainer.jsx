import { connect } from "react-redux";
import InputWorkingChat from "./InputWorkingChat";
import { workingChatCreator, deleteMessageCreatorTWo, /* updateInputCreator */ } from "../../../redux/workingChat-reducer";

const mapStateToProps = (state) => {
    return {
        workingChatData: state.workingChatData
    }
  }


const mapDispatchToProps = (dispatch) => {
    return {
        addMessageTwo: (newTextMessageTwo) => {
            dispatch(workingChatCreator(newTextMessageTwo));
        },
        deleteMessageTwo: (newTextMessageTwo) => {
            dispatch(deleteMessageCreatorTWo(newTextMessageTwo));
        },
        /* updateInput: (newTextMessageTwo) => {
            dispatch(updateInputCreator(newTextMessageTwo));
        } */
    }
 }



const WorkingChatContainer = connect(mapStateToProps, mapDispatchToProps) (InputWorkingChat);

export default WorkingChatContainer;