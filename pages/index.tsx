import Header from "../components/Header";
import styled from "styled-components";
import Card from "../components/index/Card";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Center = styled.div`
  width: 1280px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(12, 1fr);
`;

const Index = () => (
  <>
    <Header />
    <Main>
      <Center>
        <Card>
          <p>coming soon...</p>
        </Card>
      </Center>
    </Main>
  </>
);

export default Index;
