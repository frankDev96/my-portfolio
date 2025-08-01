import React, { useState, ChangeEvent } from "react";
import "./ChatWidget.css";

interface ChatWidgetProps { }

const ChatWidget: React.FC<ChatWidgetProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // Track if input should be a textarea
  const [message, setMessage] = useState<string>(""); // Track message input

  const toggleChat = (): void => {
    setIsOpen(!isOpen);
    setIsExpanded(false); // Reset expanded state when closing
  };

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsExpanded(true); // Switch to textarea mode
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <div className="chat-widget-container">
      {/* Chat button when minimized */}
      <div
        className={`chat-button ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
      >
        <span>Chat with me</span>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
          alt="👋"
          className="emoji"
        />
      </div>

      {/* Expanded chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Hi there 👋</span>
            <button className="dropdown-btn" onClick={toggleChat}>
              {/* Dropdown icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
          </div>
          <div className="chat-body">
            <p>Welcome to my website. Ask me anything 🎉</p>
            <div className="reply-status">
              <span className="status-dot"></span> I reply immediately
            </div>
          </div>
          <div className="chat-footer">
            {isExpanded ? (
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message..."
                rows={2}
                className="chat-textarea"
              ></textarea>
            ) : (
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Enter your message..."
                className="chat-input"
              />
            )}
            <button className="send-btn">
              <svg
                id="ic_send"
                fill="#FFFFFF"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
