import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import { Message } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  scroll-behavior: smooth;
`;

const InputContainer = styled.form`
  display: flex;
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 1rem;
`;

const SendButton = styled.button`
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

interface ChatContainerProps {
  messages: Message[];
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  input,
  isLoading,
  onInputChange,
  onSubmit,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Container>
      <MessagesContainer>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.sender}
          />
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <InputContainer onSubmit={onSubmit}>
        <Input
          type="text"
          value={input}
          onChange={onInputChange}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <SendButton type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? 'Sending...' : 'Send'}
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatContainer;