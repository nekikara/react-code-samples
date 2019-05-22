import styled from "styled-components";

const ThreeColumns = styled.div`
  grid-column: span 3;
  height: 100px;
  border-top: 1px solid rgba(0, 0, 0, .4);
`;

const CardContentBox = styled.div`
  padding: 5px 0 0;
`;

const Card = (props: any) => (
  <ThreeColumns>
    <CardContentBox>
      {props.children}
    </CardContentBox>
  </ThreeColumns>
);

export default Card;
