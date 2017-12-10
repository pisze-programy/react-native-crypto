import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

export class AllCrypto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>All Currencies</Text>
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
)(AllCrypto);
