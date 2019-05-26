import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../styles/Colors";

const CardBase = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Colors.Green};
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Card = (props: any) => {
  return (
    <CardBase>
      <CardImage src={props.progress.url} alt=""/>
    </CardBase>
  );
};

export default Card;
