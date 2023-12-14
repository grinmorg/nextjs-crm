import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { useState } from "react";

interface Message {
  createdAt?: string;
  name?: string;
  text: string;
}

export default function Page() {

  // State to store the messages
  const [messages, setMessages] = useState<Message[]>([]);
  // State to store the current message
  const [currentMessage, setCurrentMessage] = useState<string>('');

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
        <button>Send</button>
      </div>
    </UIBasePage>
  );
};
