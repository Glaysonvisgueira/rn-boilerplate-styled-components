import {
  Container,
  Avatar,
  TextUserName,
  TextEmail,
  ContainerText,
} from "./styles";

export function UserCard() {
  return (
    <Container>
      <Avatar
        source={{
          uri: "https://avatars.githubusercontent.com/u/31600079?s=400&u=8fc4f58de6db3ca19c901fd31a1273627906be33&v=4",
        }}
      />

      <ContainerText>
        <TextUserName>Glayson Visgueira</TextUserName>
        <TextEmail>glaysonwow@gmail.com</TextEmail>
      </ContainerText>
    </Container>
  );
}
