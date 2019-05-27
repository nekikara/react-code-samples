import React from 'react';
import styled from "styled-components";
import {Colors} from "../../styles/Colors";


const CardBase: React.FC<any> = ({className}) => {

  return (
    <div draggable={true} onDragStart={() => {console.log('drag start');}} className={className}>
      draggable
    </div>
  )
};

const Card = styled(CardBase)`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 100px;
  left: 100px;
  background-color: ${Colors.Black};
`;

export default Card;
