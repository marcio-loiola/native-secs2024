import { ContainerBook } from "@components/CardBlock/styles";
import { Container } from "./styles";
import { Text } from "react-native"
import { CardBlock } from "@components/CardBlock";

export const Home = () => {
  return (
    <Container>
      <ContainerBook> 
        <CardBlock/>
      </ContainerBook>
    </Container>
  );
}

