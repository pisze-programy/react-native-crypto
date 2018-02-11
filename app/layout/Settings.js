// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

type Props = {

};

export class Settings extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={{color: '#fff'}}>Settings</Text>
      </View>
    );
  }
}

const state = (state) => {
  return {}
};

export default connect(state)(Settings);