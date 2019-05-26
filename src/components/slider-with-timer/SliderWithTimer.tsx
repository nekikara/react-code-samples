import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../styles/Colors";
import ProgressBar, {ProgressData, ProgressFocusedStates, ProgressStates} from "./ProgressBar";
import ProgressPlayer from "./ProgressPlayer";
import Card from "./Card";
import SlideButtons, {ISlideButtons} from "./SlideButtons";

const Base = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${Colors.Black};
`;

const InfoBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


const InfoBoxPadding = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
  padding: ${(props: {padding: any}) => props.padding};
`;

const InfoBoxVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoBoxUpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 24px;
  line-height: 24px;
`;

const InfoBoxLower = styled.div`
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressRow = styled.div`
  height: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-size: 11px;
  color: ${Colors.White};
`;

export type ProgressFocus = {
  key: number;
  state: ProgressFocusedStates;
}

export type ProgressIntegrateStates = {
  state: ProgressStates;
  focus: ProgressFocusedStates | null;
}

export interface ISliderWithTimer {
  progresses: ProgressData[];
  handleAnimationEnded: (id: number) => void;
  handlePlayerClick: () => void;
  focus: ProgressFocus;
  slideButtons: ISlideButtons;
}

const calcProgressState = (progress: ProgressData, focus: ProgressFocus): ProgressIntegrateStates => {
  if (progress.key < focus.key) {
    return {state: ProgressStates.Ended, focus: null};
  } else if (progress.key === focus.key) {
    return {state: ProgressStates.Focused, focus: focus.state};
  } else {
    return {state: ProgressStates.Waiting, focus: null};
  }
};

const renderProgressBars = (props: ISliderWithTimer, width: string, focus: ProgressFocus): any => {
  return props.progresses.map(progress => {
    const state = calcProgressState(progress, focus);
    return <ProgressBar key={progress.key}
                        width={width}
                        progressData={progress}
                        state={state}
                        handleAnimationEnded={props.handleAnimationEnded}
    />
  });
};

const selectFocusedProgressData = (focus: ProgressFocus, progresses: ProgressData[]): ProgressData | undefined => {
  return progresses.find(progress => progress.key === focus.key);
};

const SliderWithTimer = (props: ISliderWithTimer) => {
  const w = ((100 / props.progresses.length) - 2) + '%';
  const focusedProgress = selectFocusedProgressData(props.focus, props.progresses);
  return (
    <Base>
      <Card progress={focusedProgress}/>
      <SlideButtons {...props.slideButtons}/>
      <InfoBox>
        <InfoBoxPadding padding="5px">
          <InfoBoxVertical>
            <InfoBoxUpper>
              <Subtitle>{focusedProgress!.subtitle}</Subtitle>
              <ProgressPlayer state={props.focus.state}
                              handlePlayerClick={props.handlePlayerClick}
              />
            </InfoBoxUpper>
            <InfoBoxLower>
              <ProgressRow>
                {renderProgressBars(props, w, props.focus)}
              </ProgressRow>
            </InfoBoxLower>
          </InfoBoxVertical>
        </InfoBoxPadding>
      </InfoBox>
    </Base>
  );
};

export default SliderWithTimer;
