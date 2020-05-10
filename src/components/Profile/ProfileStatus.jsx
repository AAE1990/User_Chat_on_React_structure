import React from 'react';
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.statusText
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusText(this.state.statusText);
    }

    onStatusTextChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className={style.statusBlock}>
                <div className={style.statusDesign}>
                    {this.props.status}

                    {!this.state.editMode &&
                        <div className={style.statusInputDown}>
                            <span onClick={this.activateEditMode}>{this.props.statusText}</span>
                        </div>}
                    {this.state.editMode &&
                        <div className={style.statusInput}>
                            <input onChange={this.onStatusTextChange} autoFocus={true} onBlur={this.deactivateEditMode} 
                            value={this.state.statusText} maxlength="20" />
                        </div>}
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
