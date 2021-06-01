import { Container, Content, Name, Date, LastMsg } from "./styles";

export function ChatListItem() {
  return (
    <Container>
      <img
        src="https://www.monteirolobato.edu.br/public/assets/admin/images/avatars/avatar7_big@2x.png"
        alt=""
      />
      <Content>
        <div>
          <Name>Murilo Lopes</Name>
          <Date>19:00</Date>
        </div>
        <div>
          <LastMsg>
            <p>Opa, bão ?</p>
          </LastMsg>
        </div>
      </Content>
    </Container>
  );
}
