// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { CurrencyElement } from "../components/CurrencyElement";

type Props = {

}

@connect((state: Props) => ({
  //
}))
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