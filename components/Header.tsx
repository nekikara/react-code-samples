import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.h2`
  font-size: 20px;
  text-align: center;
`;

const Header = () => (
  <Container>
    <VerticalCenter>
      <HeaderTitle>react-code-samples</HeaderTitle>
    </VerticalCenter>
  </Container>
);

export default Header;

