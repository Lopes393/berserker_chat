import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
import { ChatListItem } from "../ChatListItem/ChatListItem";
import { Container, Header, Search, Chatlist } from "./styles";

export function Sidebar() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}]);

  return (
    <Container>
      <Header>
        <img
          src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar7_big@2x.png"
          alt=""
        />
        <div className="actions">
          <div className="actions-btn">
            <DonutLargeIcon style={{ color: "#919191" }} />
          </div>
          <div className="actions-btn">
            <ChatIcon style={{ color: "#919191" }} />
          </div>
          <div className="actions-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </Header>
      <Search>
        <div className="search">
          <SearchIcon fontSize="small" />
          <input
            type="search"
            placeholder="Procurar ou começar uma nova conversa"
          />
        </div>
      </Search>
      <Chatlist>
        {chatList.map((item, key) => (
          <ChatListItem key={key} />
        ))}
      </Chatlist>
    </Container>
  );
}
