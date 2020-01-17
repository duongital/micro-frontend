import React from "react";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ""
    };
  }
  handleOnChange(event) {
    this.setState({
      textareaValue: event.target.value
    });
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
  render() {
    return (
      <div>
        <p> {this.state.textareaValue}</p>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <textarea
            rows={10}
            cols={30}
            value={this.state.textareaValue}
            onChange={event => this.handleOnChange(event)}
          ></textarea>
          <br />
          <input type="submit" value="Save" />
        </form>
        <vaadin-text-field
          label="Description"
          placeholder="Write here ..."
        ></vaadin-text-field>
      </div>
    );
  }
}
