import React from 'react';
import style from './AddMessageChateTwo.module.css';
import { reduxForm, Field } from 'redux-form';

const AddMessageChateTwo = (props) => {

    return (
            <div className={style.inputMessage} >
                <form onSubmit={props.handleSubmit} >
                    <Field component={"textarea"} name={"newTextMessageTwo"} className={style.inputText} />
                    <button className={style.buttonInput}>></button>
                </form>
            </div>
    )
}

export default reduxForm({form: 'messageWorking'})(AddMessageChateTwo)