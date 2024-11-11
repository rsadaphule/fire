import React from "react";
interface UserMessage {
    name: string
    message: string
}

const Message: React.FC<UserMessage> = ({name, message}) => {
    return (
                <> 
                {name}, {message}
                </>

    )
}

export default Message ;