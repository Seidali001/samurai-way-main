import React from "react";
import s from "../Dialogs.module.css";

type MessagePropsType = {
    id: number
    text: string
}

const Message: React.FC<MessagePropsType> = (props) => {

   /* let textareaElement = React.createRef<string>()*/

   /* const sendMessage = () => {
        const text = textareaElement.current
        return console.log(text)
    }*/
    return (
        <div className={s.dialog}>
            {props.text}
           {/* <textarea  ref={textareaElement.current}></textarea>
            <button onClick={sendMessage}>send</button>*/}

        </div>
    )
}

export default Message