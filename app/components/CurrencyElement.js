// @flow
import React, { Component, PropTypes } from 'react';
import { Text, View } from "react-native";

type Props = {
  coin: any,
  index: number
}

export class CurrencyElement extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: '#000'}}>
        <Text style={{color: '#fff'}}>
          Element {this.props.index}
        </Text>
      </View>
    );
  }
}