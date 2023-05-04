import { html } from 'lit';

import { HelloWorld } from './hello-world-js';

export default {
  title: 'Hello World JS',
  component: 'hello-world-js'
};

export const Primary = {
  args: {
    who: 'Angela'
  },
  render: ({ who }) => html`<hello-world-js who="${who}"/>`
};