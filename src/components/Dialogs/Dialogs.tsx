import React, {useState} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addPost, DialogPagesType} from "../State/state";

type DialogsType = {
    state: DialogPagesType
    // addPostCallback: (text: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    // const [text, setText] = useState<string | undefined>("")

    // let textareaElement = React.createRef<HTMLTextAreaElement>()

    /*const sendMessage = () => {
        /!*setText(textArea)*!/
        if (textareaElement.current) {
            props.addPostCallback(textareaElement.current?.value)
        }

    }*/



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map((m, i) => <Message key={i} text={m.message} id={m.id}/>)}
            </div>
            {/*<div>
                <p>{text}</p>
                <textarea ref={textareaElement}></textarea>
                <button onClick={sendMessage}>send</button>

            </div>*/}

        </div>
    );
};

export default Dialogs;