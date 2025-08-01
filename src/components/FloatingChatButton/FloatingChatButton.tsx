import React from "react";
import "./FloatingChatButton.css";

interface FloatingChatButtonProps {
  onClick?: () => void;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick }) => {
  return (
    <div className="floating-chat-button">
      <button className="chat-button" onClick={onClick}>
        Chat with me 👋
      </button>
    </div>
  );
}

export default FloatingChatButton;
