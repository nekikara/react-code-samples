import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from "styled-components";

import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

const Container = styled.div`
  width: 100px;
  height: 100%;
  background-color: black;
`;


storiesOf("Button", module)
  .add("SVGs", () => (
    <Container>
      <div>
        <PlayButton />
      </div>
      <div>
        <PauseButton />
      </div>
      <div>
        <LeftArrowButton />
      </div>
      <div>
        <RightArrowButton />
      </div>
    </Container>
  ));
