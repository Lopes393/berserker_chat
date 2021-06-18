import { GlobalStyle } from "./styles/global";
import { Sidebar } from "./components/Sidebar";
import { ChatIntro } from "./components/ChatIntro";
import { ChatWindow } from "./components/ChatWindow";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function App() {
  const [activeChat, setActiveChat] = useState({});

  return (
    <Container>
      <Sidebar setActiveChat={setActiveChat} />
      {activeChat ? <ChatWindow /> : <ChatIntro />}
      <GlobalStyle />
    </Container>
  );
}
