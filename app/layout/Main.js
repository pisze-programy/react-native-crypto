// @flow
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { connect } from "react-redux";
import { AllCrypto } from "./AllCrypto";
import { styles } from "../styles";
import { Header } from "../components/Header";

type Props = {

}

@connect(state => ({
  //
}))
export default class MainLayout extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />

        <Header name="Crypto Market Cap" />
        <AllCrypto />
      </View>
    );
  }
}