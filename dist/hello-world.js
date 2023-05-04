import { _ as _decorate, s, e, x, a as e$1 } from './query-assigned-elements-f8b1b870.js';
import { o } from './style-map-09ef3963.js';
import './directive-2bb7789e.js';

let NintexHelloWorld = _decorate([e$1('hello-world-ts')], function (_initialize, _LitElement) {
  class NintexHelloWorld extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: NintexHelloWorld,
    d: [{
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "name",
      value() {
        return 'Bob';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Number
      })],
      key: "fontSize",
      value() {
        return 20;
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        // plugin contract information
        return {
          controlName: 'Hello-World',
          fallbackDisableSubmit: false,
          description: 'This is a simple hello world example',
          iconUrl: 'one-line-text',
          groupName: 'Visual',
          version: '1.3',
          properties: {
            //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
            fontSize: {
              type: 'number',
              title: 'Font Size',
              description: 'Font size of the text',
              defaultValue: 20
            },
            name: {
              type: 'string',
              title: 'Name',
              description: 'What is your name?',
              defaultValue: 'Bob'
            }
          },
          standardProperties: {
            readOnly: true,
            //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
            required: true,
            description: true
          }
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let styles = {
          "font-size": this.fontSize + 'px'
        };
        return x`<p style=${o(styles)}>Hello World, ${this.name}!</p>`;
      }
    }]
  };
}, s);

export { NintexHelloWorld };
