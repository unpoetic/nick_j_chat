import { useState, useEffect, React } from 'react';
import Message from './Message';
const Store = require('electron-store');
const store = new Store();

const ChatDisplay = (props) => {
    const [inputList, setInputList] = useState([]);
    const [isHuman, setIsHuman] = useState(false);
    const [messageNumber, setMessageNumber] = useState(0);
    let lastMessage = store.get('lastMessage');

    useEffect(() => {
        if(!lastMessage)
            store.set('lastMessage', 'Hey there how is life?');

        if(messageNumber === 0) {
            setIsHuman(!isHuman);
            setInputList(inputList.concat(<Message isHuman={isHuman} props={store.get('lastMessage')} key={inputList.length} />));
            setMessageNumber(messageNumber + 1);
        }
    });

    const handleMessageSend = event => { 
        if(event.key == 'Enter'){
            setIsHuman(!isHuman);
            setInputList(inputList.concat(<Message isHuman={isHuman} props={event.target.value} key={inputList.length} />));
            store.set('lastMessage', event.target.value);
            console.log(store.get('lastMessage'));
            event.target.value = "";
        }
    };

    return (
        <div id="content-wrapper">
            <div id="chat-display">
                <div id="chat-display-header"></div> 
                <div id="messagesDisplay" >
                    {inputList}
                </div>
            </div>
            
            <input id="inputText" onKeyDown={handleMessageSend} />
            <div id="send-message" onClick={handleMessageSend}>
                <img src="send_message_icon.png" />
            </div>
        </div>
    )
}

export default ChatDisplay;