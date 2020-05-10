import React from 'react';
import style from './InputFloodChat.module.css';
import AddMessgaeChat from './AddMessagesChat/AddMessgaeChat';
import Messages from './Messages';

const MessageFloodChat = (props) => {

    let state = props.floodChatData;

    let windowMessagesElements = state.windowMessage.map(m => <Messages key={m.id} message={m.message} />)

    let onAddMessage = (values) => {
        props.addMessage(values.newTextMessage)
    }

    let onDeleteMessage = (values) => {
        props.deleteMessage(values.newTextMessage)
    }

/*     let onUpdateInput = (values) => {
        props.updateInput(values.newTextMessage)
    } */

    return (
        <div className={style.inputBlock}>
            <div className={style.showMessage} >
                <span className={style.messageElements}> {state.myMessageMarker.workingChat}
                    {state.myMessageMarker.name} </span>
                <span className={style.messageElementsTwo} > {windowMessagesElements} </span>
                <span className={style.messageElementsThree} > <button onClick={onDeleteMessage}>Отчистить</button> </span>
            </div>
            <AddMessgaeChat onSubmit={onAddMessage} /* onChange={onUpdateInput} */ />
        </div>
    )
}

export default MessageFloodChat;