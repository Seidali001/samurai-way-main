import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Header from "../Header";
import {authMeTC, ServerAuthUserDataType, setUserDataAC} from "../../../reducers/auth-reducer";
import axios from "axios";
import {AppRootStateType} from "../../../redux-store/redux-store";
import {authMeApi} from "../../../api/authMe";



export class HeaderContainer extends Component<HeaderContainerPropsType> {
    constructor(props: HeaderContainerPropsType) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.props.authMeTC()
        /*authMeApi.getAuthMe()
            .then(data => {
                this.props.setAuthUserDateCallback(data)
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });*/
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        );
    }


};

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.authData.isAuth,
        login: state.authData.login
    }
}

type mapDispatchToPropsType = {
    setUserDataAC: (data: ServerAuthUserDataType) => void
    authMeTC: () => void
}

/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setAuthUserDateCallback: (data: ServerAuthUserDataType) => {
            dispatch(setUserDataAC(data))
        }
    }
}*/

export const ConnectedHeaderComponent = connect(mapStateToProps, /*mapDispatchToProps*/{
    setUserDataAC, authMeTC
})(HeaderContainer);


