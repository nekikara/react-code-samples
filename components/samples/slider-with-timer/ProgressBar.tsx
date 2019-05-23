import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Colors} from "./Colors";
import {ProgressIntegrateStates} from "./SliderWithTimer";

export enum ProgressFocusedStates {
  Running = 1,
  Pausing,
}

export const toggleFocusedState = (current: ProgressFocusedStates): ProgressFocusedStates => {
  if (current == ProgressFocusedStates.Running) {
    return ProgressFocusedStates.Pausing;
  } else {
    return ProgressFocusedStates.Running;
  }
};

export enum ProgressStates {
  Waiting = 1,
  Focused,
  Ended,
}

const colorWithState = (state: ProgressIntegrateStates) => {
  if (state.state === ProgressStates.Ended) {
    return Colors.GreyLighten;
  } else {
    return 'rgba(255, 255, 255, 0.4)';
  }
};

const ProgressBaseBar = styled.div`
  background-color: ${props => colorWithState(props.state)};
  height: 100%;
  width: ${props => props.width};
`;

const progress = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1.0);
  }
`;

const animationPlayState = (state: ProgressIntegrateStates): string => {
  if (state.focus === ProgressFocusedStates.Running) {
    return 'running';
  } else {
    return 'paused';
  }
};

const Progress = styled.div`
  background-color: ${Colors.GreyLighten};
  height: 100%;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0.0);
  animation: ${progress} 3s linear forwards;
  animation-play-state: ${props => animationPlayState(props.state)};
`;

export type ProgressData = {
  key: number;
  url: string;
  subtitle: string;
};

export interface IProgressBar {
  width: string;
  handleAnimationEnded: (id: number) => void;
  progressData: ProgressData;
  state: ProgressIntegrateStates;
}

const ProgressBar = (props: IProgressBar) => {
  return (
    <ProgressBaseBar width={props.width} state={props.state}>
      {
        (props.state.state == ProgressStates.Focused) &&
        <Progress state={props.state}
                  onAnimationEnd={() => props.handleAnimationEnded(props.progressData.key)}
        />
      }
    </ProgressBaseBar>
  );
};

export default ProgressBar;
