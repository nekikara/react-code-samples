import React from 'react';
import styled from 'styled-components';
import {ProgressFocusedStates} from "./ProgressBar";

export interface IProgressPlayer {
  state: ProgressFocusedStates;
  handlePlayerClick: () => void;
}

const PlayerButton = styled.button`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15px;
  padding: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.0);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PlayerImg = styled.img`
  height: 15px;
  width: 15px
`;

const ProgressPlayer = (props: IProgressPlayer) => {
  let imageSrc = '/static/images/button_play.png';
  if (props.state === ProgressFocusedStates.Running) {
    imageSrc = '/static/images/button_pause.png';
  }

  return (
    <PlayerButton onClick={props.handlePlayerClick}>
      <PlayerImg src={imageSrc} alt="play"/>
    </PlayerButton>
  );
};

export default ProgressPlayer;
