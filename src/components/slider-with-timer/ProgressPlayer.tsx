import React from 'react';
import styled from 'styled-components';
import {ProgressFocusedStates} from "./ProgressBar";
import PlayButton from "../PlayButton";
import PauseButton from "../PauseButton";

export interface IProgressPlayer {
  state: ProgressFocusedStates;
  handlePlayerClick: () => void;
}

const PlayerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.0);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ProgressPlayer = (props: IProgressPlayer) => {
  let button = <PlayButton />;
  if (props.state === ProgressFocusedStates.Running) {
    button = <PauseButton />;
  }

  return (
      <PlayerButton onClick={props.handlePlayerClick}>
        {button}
      </PlayerButton>
  );
};

export default ProgressPlayer;
