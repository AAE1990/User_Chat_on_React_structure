import React from 'react';
import style from './AddMessageChateTwo.module.css';
import { reduxForm, Field } from 'redux-form';

class AddMessageChateTwo extends React.Component {

    render() {
        const {handleSubmit, reset} = this.props;
        return (
            <div className={style.inputMessage} >
                <form onSubmit={handleSubmit} >
                    <Field component={"textarea"} name={"newTextMessageTwo"} className={style.inputText} />
                    <button className={style.buttonInput}>></button>
                    <button type="button" onClick={reset}>Очистить форму</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'messageWorking' })(AddMessageChateTwo)