import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container, Header, Search, Chatlist } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <Header>
        <img
          src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar7_big@2x.png"
          alt=""
        />
        <div className="actions">
          <div className="actions-btn"></div>
        </div>
      </Header>
      <Search></Search>
      <Chatlist></Chatlist>
    </Container>
  );
}
