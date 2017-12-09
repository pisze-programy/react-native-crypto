import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

export class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit App.js
        </Text>
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
)(MainLayout);
