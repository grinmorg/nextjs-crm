import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

interface Message {
  createdAt?: string;
  name?: string;
  text: string;
}

/**
 * FIXME: Так и не удалось заставить работать
 */

// Create a socket connection
// let socket = io('http://localhost:4205');

export default function Page() {

  // State to store the messages
  const [messages, setMessages] = useState<Message[]>([]);
  // State to store the current message
  const [currentMessage, setCurrentMessage] = useState<string>('');

  useEffect(() => {

    let socket = io('http://localhost:4205');

    // Listen for incoming messages
    socket.on('message', (message: string) => {
      const newMessage: Message = { text: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Send the message to the server
    socket.emit('message', currentMessage);
    // Clear the currentMessage state
    setCurrentMessage('');
  };

  return (
    <UIBasePage>
      <h2 className="text-lg font-medium mr-auto">Чат</h2>

      <div>
        {/* Display the messages */}
        {messages.map((message, index) => (
          <p key={index}>{message.text}</p>
        ))}

        {/* Input field for sending new messages */}
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />

        {/* Button to submit the new message */}
        <button onClick={sendMessage}>Send</button>
      </div>
    </UIBasePage>
  );
};
