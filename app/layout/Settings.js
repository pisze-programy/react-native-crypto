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
        <Text>Settings</Text>
      </View>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {}
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
