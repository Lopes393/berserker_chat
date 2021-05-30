import { GlobalStyle } from "./styles/global";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Container } from "./styles";

export function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <GlobalStyle />
    </Container>
  );
}
