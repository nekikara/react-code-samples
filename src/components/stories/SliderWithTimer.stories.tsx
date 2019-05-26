import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Fulfill from "../slider-with-timer/Fulfill";

storiesOf("SliderWithTimer", module)
  .add("normal", () => (
    <Fulfill />
  ));
