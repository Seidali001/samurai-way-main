import React from 'react';
import {addMessageAC, initialStateDialogsType, updateNewTextMessageAC} from "../../reducers/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import {AppRootStateType} from "../../redux-store/redux-store";
import {Dispatch} from "redux";


type DialogsType = {
    state: AppRootStateType
}

const DialogsContainer: React.FC<DialogsType> = (props) => {

    // const dispatch = useDispatch()
    // const onChangeHandlerCallback = (text: string) => {
    //     dispatch(updateNewTextMessageAC(text))
    // }
    //
    // const sendMessageCallback = () => {
    //     dispatch(addMessageAC())
    // }
    //

    return (
       // <Dialogs dialogPages={props.state.dialogPages} sendMessageCallback={sendMessageCallback} onChangeHandlerCallback={onChangeHandlerCallback}/>
        <ConnectedDialogsComponent/>
    );
};

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogPages: initialStateDialogsType
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogPages: state.dialogPages
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

const ConnectedDialogsComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;