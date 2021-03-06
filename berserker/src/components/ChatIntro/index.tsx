import { Container } from "./styles";

export function ChatIntro() {
  return (
    <Container>
      <img
        src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt=""
      />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O Berserker conecta ao seu Whatsapp para sincronizar suas mensagens.
        <br />
        Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.
      </h2>
    </Container>
  );
}
