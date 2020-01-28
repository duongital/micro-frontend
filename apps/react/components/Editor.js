import React from "react";
import "@vaadin/vaadin-text-field";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ""
    };
  }
  handleOnChange(event) {
    // binding from React to Web Component
    // this.setState({
    //   textareaValue: event.target.value
    // });
    // this.refs.firstName.value = event.target.value;

    // binding from Web Component to React
    // this.setState({
    //   textareaValue: this.refs.firstName.value
    // });

  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
      textareaValue:
        this.state.textareaValue +
        " [Saved on " +
        new Date().toLocaleString() +
        "]"
    });
  }
  componentDidMount() {
    console.log('mounted');
    this.refs.button.addEventListener('click', (event) => {
      this.setState({
        textareaValue: this.refs.firstName.value
      })
    })
  }

  render() {
    return (
      <div>
        <p className="mt-12">binding: {this.state.textareaValue}</p>
        
        {/*
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <p className="mt-12">Text area:</p>
           <textarea
            className="border border-solid border-gray-500"
            rows={5}
            cols={30}
            value={this.state.textareaValue}
            onChange={event => this.handleOnChange(event)}
          ></textarea>
          <br />
          <input className="btn btn-blue" type="submit" value="Save" />
        </form>
         */}
         
        <p className="mt-12">Test native component:</p>
        <vaadin-text-field
          label="Input Field"
          placeholder="Write here ..."
          ref="firstName"
        ></vaadin-text-field>
        <button className="btn btn-blue" ref="button">Add field</button>
        <br/>
      </div>
    );
  }
}
