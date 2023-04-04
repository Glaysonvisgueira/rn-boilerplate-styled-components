import { Container } from "./styles";
import { UserCard } from "../../components/UserCard";

import SwitchButton from "../../components/SwitchThemeButton";

export function Home() {
  return (
    <Container>
      <UserCard />
      <SwitchButton />
    </Container>
  );
}
