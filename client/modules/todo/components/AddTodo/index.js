import React, { Component } from "react";
import { themr } from "react-css-themr";
import { HotKeys } from "react-hotkeys";
import Input from "react-toolbox/lib/input/Input";

import container from "./container";
import addTodoTheme from "./theme.scss";

export class AddTodo extends Component {
  state = { value: "" };

  handleChange = value => {
    this.setState({ value });
  };

  handleSave = event => {
    this.props.onSave(event.target.value);
    this.setState({ value: "" });
  };

  render() {
    const { theme } = this.props;
    const { value } = this.state;

    const keyMap = { createTodo: "enter" };
    const handlers = { createTodo: this.handleSave };

    return (
      <div className={theme.addTodo}>
        <HotKeys keyMap={keyMap} handlers={handlers}>
          <Input label="Add Todo" value={value} onChange={this.handleChange} />
        </HotKeys>
      </div>
    );
  }
}

export const ThemedAddTodo = themr("", addTodoTheme)(AddTodo);

export default container(ThemedAddTodo);
