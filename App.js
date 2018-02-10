// @flow
import React, { Component } from "react";
import configureStore from "./app/store";
import { Provider } from "react-redux";
import MainLayout from "./app/layout/Main";

const store = configureStore();

export default class App extends Component<{}> {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <MainLayout/>
      </Provider>
    )
  }
}