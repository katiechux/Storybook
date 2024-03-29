import { html, LitElement} from 'lit';
// define the component
export class HelloWorld extends LitElement {
  
  static properties = {
    who: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World JS',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.who = 'World';
  }

  render() {
    return html`<p>Hello ${this.who}<p/>`;
  }
}

// registering the web component
const elementName = 'hello-world-js';
customElements.define(elementName, HelloWorld);

