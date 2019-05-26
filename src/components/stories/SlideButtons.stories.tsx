import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from "styled-components";

import SlideButtons from "../slider-with-timer/SlideButtons";

const Container = styled.div`
  position:relative;
  width: 200px;
  height: 300px;
  background-color: rgba(1,1,1, .3);
`;

storiesOf("SlideButtons", module)
  .add("normal", () => (
    <Container>
      <SlideButtons handleLeftClick={() => {console.log('left clicked');}}
                    handleRightClick={() => {console.log('right clicked');}}
      />
    </Container>
  ));
