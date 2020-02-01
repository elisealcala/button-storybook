import React from 'react';
import {configure, addDecorator} from "@storybook/react";
import CustomLayout from './custom-layout';

addDecorator(storyfn => <CustomLayout>{storyfn()}</CustomLayout>);

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);