import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

import './hello-world';
import { NintexHelloWorld } from './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world-ts',
} as Meta;

const Template: StoryFn<NintexHelloWorld> = ({ name, fontSize, test }) => {
  return html`<hello-world-ts
    .name=${name}
    .fontSize=${fontSize}
    .test=${test}
  >
  </hello-world-ts>`;
};

export const Base: StoryFn<NintexHelloWorld> = Template.bind({});
Base.args = {
  name: 'Bob',
  fontSize: 20
};
