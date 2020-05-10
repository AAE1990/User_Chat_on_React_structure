import React from 'react';
import style from './InputWorkingChat.module.css';
import AddMessageChateTwo from './AddMessageChateTwo/AddMessageChateTwo';
import MessagesTwo from './MessagesTwo';

const InputWorkingChat = (props) => {

    let state = props.workingChatData;

    let windowMessagesElementsTwo = state.windowMessageTwo.map(mt => <MessagesTwo key={mt.id} message={mt.message} />)

    let onAddMessageTwo = (valuesTwo) => {
        props.addMessageTwo(valuesTwo.newTextMessageTwo)
    }

    let onDeleteMessageTwo = (valuesTwo) => {
        props.deleteMessageTwo(valuesTwo.newTextMessageTwo)
    }

/*     let onUpdateInput = (values) => {
        props.updateInput(values.newTextMessageTwo)
    } */

    return (
        <div className={style.inputBlock}>
            <div className={style.showMessage} >
                <span className={style.messageElements}> {state.myMessageMarker.workingChat}
                    {state.myMessageMarker.name} </span>
                <span className={style.messageElementsTwo} > {windowMessagesElementsTwo} </span>
                <span className={style.messageElementsThree} > <button onClick={onDeleteMessageTwo}>Отчистить</button> </span>
            </div>
            <AddMessageChateTwo onSubmit={onAddMessageTwo} /* onChange={onUpdateInput} */ />
        </div>
    )
}

export default InputWorkingChat;