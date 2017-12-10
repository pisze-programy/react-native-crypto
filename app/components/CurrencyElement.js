// @flow
import React, { Component, PropTypes } from 'react';
import { Text, View } from "react-native";

type Props = {

}

export class CurrencyElement extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          Element
        </Text>
      </View>
    );
  }
}