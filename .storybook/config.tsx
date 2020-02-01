import React from 'react';
import {configure, addDecorator, addParameters} from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import CustomLayout from './custom-layout';

addDecorator(storyfn => <CustomLayout>{storyfn()}</CustomLayout>);
addDecorator(withInfo({
  inline: true,
}));
addDecorator(withKnobs);
addDecorator(Story => <Story />);

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);