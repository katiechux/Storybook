import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";

import './preview.css';

setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
