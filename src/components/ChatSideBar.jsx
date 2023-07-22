import { useState } from 'react';
const Store = require('electron-store');
const store = new Store();

const ChatSideBar = (props) => {
    let [lastMessageText, setLastMessageText] = useState(store.get('lastMessage'));

    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes();

    return <div id="chat-side-bar">
        <div className="conversation">
           <div className="circle-pic"></div> 
           <div className="conversation-name">
                {props.firstName}
                
            <div className="last-message-preview">{lastMessageText}</div>
            </div>
            <div className="conversation-time">{showTime}</div>
        </div>
        <div className="new-icon">
        </div>
    </div>
}

export default ChatSideBar;