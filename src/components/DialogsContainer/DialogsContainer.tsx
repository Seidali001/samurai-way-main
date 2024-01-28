import React from 'react';
import {addMessageAC, initialStateDialogsType, updateNewTextMessageAC} from "../../reducers/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import {AppRootStateType} from "../../redux-store/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogPages: initialStateDialogsType

}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogPages: state.dialogPages,

    }
}

type mapDispatchToPropsType = {
    onChangeHandlerCallback: (text: string) => void
    sendMessageCallback: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChangeHandlerCallback: (text: string) => {
            dispatch(updateNewTextMessageAC(text))
        },
        sendMessageCallback: () => {
            dispatch(addMessageAC())
        }
    }
}


/*

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

//export const ConnectedDialogsComponent = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
*/

export const ConnectedDialogsComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs) as React.ComponentType; // Оборачиваем компонент в compose и указываем тип React.ComponentType
