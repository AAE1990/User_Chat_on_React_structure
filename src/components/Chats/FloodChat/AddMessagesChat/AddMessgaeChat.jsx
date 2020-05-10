import React from 'react';
import style from './AddMessgaeChat.module.css';
import { reduxForm, Field } from 'redux-form';

const AddMessgaeChat = (props) => {

    return (
            <div className={style.inputMessage} >
                <form onSubmit={props.handleSubmit} >
                    <Field component={"textarea"} name={"newTextMessage"} className={style.inputText} />
                    <button className={style.buttonInput}>></button>
                </form>
            </div>
    )
}

export default reduxForm({form: 'message'})(AddMessgaeChat)