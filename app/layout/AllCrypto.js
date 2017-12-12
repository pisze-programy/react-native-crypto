// @flow
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { CurrencyElement } from "../components/CurrencyElement";

type Props = {

}

export class AllCrypto extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <CurrencyElement />
      </View>
    );
  }
}

const state = (state) => {
  return {}
};

export default connect(state)(AllCrypto);