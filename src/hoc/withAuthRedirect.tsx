import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux-store/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
}

 const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.authData.isAuth
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>)  {

    function WrapperRedirectComponent(props: mapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="login"/>
        return <Component {...restProps as T}/>;
    }

    let ConnectedWrapperRedirectComponent = connect(mapStateToProps)(WrapperRedirectComponent)

    return ConnectedWrapperRedirectComponent

};
