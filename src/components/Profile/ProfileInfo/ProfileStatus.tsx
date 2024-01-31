import React, {ChangeEvent} from 'react';


interface ProfileStatusPropsType {
    status: string
    updateUserProfileStatusTC: (status: string) => void
}




class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeMode<K extends never> () {
        this.setState({
            editMode: true
        })

    }

    deactivateMode<K extends never>() {
        this.setState({
            editMode: false
        })
        this.props.updateUserProfileStatusTC(this.state.status)
    }

    textChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        debugger
        if (prevProps.status !== this.props.status) {
            debugger
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <>
                {
                    !this.state.editMode ?
                    <div>
                        <h3 style={{cursor: "pointer"}} onDoubleClick={this.activeMode.bind(this)}>{this.props.status}</h3>
                    </div>
                    :
                    <div>
                        <input onChange={(e) => this.textChange(e)} autoFocus={true} onBlur={this.deactivateMode.bind(this)} type="text" value={this.state.status}/>
                    </div>
                }

            </>
        );
    }
}

export default ProfileStatus;