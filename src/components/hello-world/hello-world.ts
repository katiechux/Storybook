import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { PluginContract } from '@nintex/form-plugin-contract';

@customElement('hello-world-ts')
export class NintexHelloWorld extends LitElement {

    @property({ type: String })
    name: string = 'Bob';
    @property({ type: Number })
    fontSize: number = 20;

    static getMetaConfig(): Promise<PluginContract> | PluginContract {
        // plugin contract information
        return {
          controlName: 'Hello-World',
          fallbackDisableSubmit: false,
          description: 'This is a simple hello world example',
          iconUrl: 'one-line-text',
          groupName: 'Visual',
          version: '1.3',
          properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
            fontSize: {
              type: 'number',
              title: 'Font Size',
              description: 'Font size of the text',
              defaultValue: 20,
            },
            name: {
                type: 'string',
                title: 'Name',
                description: 'What is your name?',
                defaultValue: 'Bob'
            }
          },
          standardProperties: {
            readOnly: true, //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
            required: true,
            description: true,
          },
        };
    }

    render() {
        let styles = { "font-size": this.fontSize + 'px' };
        return html`<p style=${styleMap(styles)}>Hello World, ${this.name}!</p>`;
    }
}