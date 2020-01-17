import {
    LitElement,
    html
  } from 'lit-element';

  class MyButton extends LitElement {
    render() {
      return html`
        <button>My Button</button>
      `
    }
  }

  customElements.define('my-button', MyButton)