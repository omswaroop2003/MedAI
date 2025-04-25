import React from 'react';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'ai';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';

  const formatText = (text: string) => {
    // Replace markdown-style bold text with HTML bold tags
    const processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return processedText.split('\n').map((line, index) => {
      // Handle bullet points
      if (line.trim().startsWith('*')) {
        return (
          <li key={index} className="ml-6 my-1" 
              dangerouslySetInnerHTML={{ 
                __html: line.substring(1).trim() 
              }} 
          />
        );
      }
      // Handle regular text
      if (line.trim()) {
        return (
          <p key={index} 
             className="my-2" 
             dangerouslySetInnerHTML={{ 
               __html: line.trim() 
             }} 
          />
        );
      }
      return null;
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {sender === 'ai' ? (
          <div className="space-y-2">
            {formatText(text)}
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;



