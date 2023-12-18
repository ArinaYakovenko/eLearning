import React, { useState } from 'react';
import letter from '../assets/images/letter.svg';
import avatar from '../assets/images/user-avatar.svg';
import dots from '../assets/images/ellipsis-v-solid.svg';
import attach from '../assets/images/paperclip-solid.svg';
import plane from '../assets/images/paper-plane.svg'

const Chat = () => {
    const [openChat, setOpenChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    console.log(messages)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className='chat'>
            {openChat === true
                ? <div className="chat-block">
                    <div className="chat-header">
                        <div className="chat-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h6>eLearning company</h6>
                                <p>Operator is online</p>
                            </div>
                        </div>
                        <img className='dots' src={dots} alt="dots" />
                    </div>
                    <div className="chat-main">
                        <ul>
                            {messages.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="chat-footer">
                        <input value={inputValue} onChange={handleInputChange} type="text" placeholder='Your message...' />
                        <div className="chat-tools">
                            <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M15.0937 2.875C14.0941 2.875 13.1115 3.26245 12.3534 4.02051L5.61514 10.7588C3.47855 12.8954 3.47855 16.3712 5.61514 18.5078C7.75174 20.6444 11.2276 20.6444 13.3642 18.5078L17.8564 14.0156L16.8456 13.0049L12.3534 17.4971C10.7671 19.0834 8.21219 19.0834 6.62588 17.4971C5.03958 15.9108 5.03958 13.3558 6.62588 11.7695L13.3642 5.03125C14.33 4.06543 15.8798 4.06543 16.8456 5.03125C17.8114 5.99707 17.8114 7.54688 16.8456 8.5127L10.1073 15.251C9.76199 15.5963 9.21732 15.5963 8.87198 15.251C8.52664 14.9056 8.52664 14.361 8.87198 14.0156L15.0487 7.83887L14.038 6.82813L7.86124 13.0049C6.96561 13.9005 6.96561 15.3661 7.86124 16.2617C8.75687 17.1573 10.2224 17.1573 11.1181 16.2617L17.8564 9.52344C19.3725 8.00732 19.3725 5.53662 17.8564 4.02051C17.0983 3.26245 16.0932 2.875 15.0937 2.875Z" fill='var(--text-color)' />
                                </g>
                            </svg>
                            <svg onClick={handleMessageSend} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M2.58301 3.84082L2.89746 5.18848L4.29004 11.5L2.89746 17.8115L2.58301 19.1592L3.86328 18.6426L19.6758 12.1738L21.3154 11.5L19.6758 10.8262L3.86328 4.35742L2.58301 3.84082ZM4.58203 6.22168L15.7451 10.7813H5.59277L4.58203 6.22168ZM5.59277 12.2188H15.7451L4.58203 16.7783L5.59277 12.2188Z" fill={inputValue ? '#29B4AD' : 'var(--text-color)'} />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                : null}
            <div onClick={() => setOpenChat(!openChat)}
                className="chat-button"
                style={{ animation: openChat ? 'none' : 'pulse 2s infinite' }}>
                <div className="chat-img">
                    <img src={letter} alt="letter" />
                </div>
            </div>
        </div>
    )
}

export default Chat;
