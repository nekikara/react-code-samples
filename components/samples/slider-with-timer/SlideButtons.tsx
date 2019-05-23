import React from 'react';
import styled from 'styled-components';

const SlideButtonsBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.0);
  opacity: 0;
  transition: opacity 300ms ease 0s;
  &:hover {
    opacity: 1;
  }
`;

const SlideButton = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SlideLeftButton = styled(SlideButton)`
  background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
`;

const SlideRightButton = styled(SlideButton)`
  background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
`;


const LeftArrow = styled.img`
  transform: rotate(180deg) translateX(10px);
`;

const RightArrow = styled.img`
  transform: translateX(10px);
`;

export interface ISlideButtons {
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

const SlideButtons = (props: ISlideButtons) => {
  return (
    <SlideButtonsBox>
      <SlideLeftButton onClick={props.handleLeftClick}>
        <LeftArrow src="/static/images/button_arrow.png"/>
      </SlideLeftButton>
      <SlideRightButton onClick={props.handleRightClick}>
        <RightArrow src="/static/images/button_arrow.png"/>
      </SlideRightButton>
    </SlideButtonsBox>
  );
};

export default SlideButtons;
