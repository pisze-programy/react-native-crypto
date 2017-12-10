// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

type Props = {

};

@connect(state => ({
  //
}))
export class Settings extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
