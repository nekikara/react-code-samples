import React from 'react'
import styled from 'styled-components';
import SliderWithTimer, {ISliderWithTimer, ProgressFocus} from "./SliderWithTimer";
import {ProgressData, ProgressFocusedStates, toggleFocusedState} from "./ProgressBar";

const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const VerticalPadding = styled.div`
  padding-top: ${(props: {padding: any}) => props.padding};
`;
const SliderBox = styled.div`
  height: 400px;
  width: 300px;
`;
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props: any) => props.theme.main};
  border: 2px solid ${(props: any) => props.theme.main};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }

};

interface IFulfillState {
  progresses: ProgressData[],
  focus: ProgressFocus;
}

class Fulfill extends React.Component<any, IFulfillState> {
  constructor(props: any)  {
    super(props);

    this.state = {
      focus: {key: 1, state: ProgressFocusedStates.Running},
      progresses: [
        {
          key: 1,
          url: 'https://images.unsplash.com/photo-1558120343-2d140d454594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          subtitle: 'By Penguinuhh on Unsplash'
        },
        {
          key: 2,
          url: 'https://images.unsplash.com/photo-1558118720-df4cd73fe6a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          subtitle: 'By Sven Brandsma on Unsplash'
        },
        {
          key: 3,
          url: 'https://images.unsplash.com/photo-1557791137-cfd61182e7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
          subtitle: 'By Sua Song on Unsplash',
        },
        {
          key: 4,
          url: 'https://images.unsplash.com/photo-1554629816-15083e43468a?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          subtitle: 'By Damon Lam on Unsplash',
        }
      ]
    };
    this.onSlideClick = this.onSlideClick.bind(this);
    this.onPlayerClick = this.onPlayerClick.bind(this);
    this.animationEnded = this.animationEnded.bind(this);
  }

  onSlideClick(direction: number) {
    return () => {
      const focus = this.state.focus;
      focus.state = ProgressFocusedStates.Running;
      const key = focus.key + direction;
      const progresses = this.state.progresses;
      if (key < 1) {
        focus.key = progresses.length;
      } else if (progresses.length < key) {
        focus.key = 1;
      } else {
        focus.key = key;
      }
      this.setState({...this.state, focus: focus});
    }
  }

  onPlayerClick() {
    const focus = this.state.focus;
    focus.state = toggleFocusedState(this.state.focus.state);
    this.setState({...this.state, focus: focus});
  }

  animationEnded(id: number) {
    const focus = this.state.focus;
    const progresses = this.state.progresses;
    if (focus.key < progresses.length) {
      focus.key += 1;
    } else {
      focus.key = 1;
    }
    focus.state = ProgressFocusedStates.Running;
    this.setState({...this.state, focus: focus});
  }

  render() {
    const timerSliderData = {} as ISliderWithTimer;
    timerSliderData.handleAnimationEnded = this.animationEnded;
    timerSliderData.handlePlayerClick = this.onPlayerClick;
    timerSliderData.progresses = this.state.progresses;
    timerSliderData.focus = this.state.focus;
    timerSliderData.slideButtons = {
      handleLeftClick: this.onSlideClick(-1),
      handleRightClick: this.onSlideClick(1),
    };

    return (
        <MainContainer>
          <VerticalPadding padding="10px">
            <SliderBox>
              <SliderWithTimer {...timerSliderData}
              />
            </SliderBox>
          </VerticalPadding>
        </MainContainer>
    );
  }
}

export default Fulfill;
