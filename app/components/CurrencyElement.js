// @flow
import React, { Component, PropTypes } from 'react';
import { Text, View } from "react-native";
import type { Coin } from "../types/coins";

type Props = {
  coin: Coin,
  index: number
}

export class CurrencyElement extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const coin = this.props.coin;
    return (
      <View style={{backgroundColor: '#000'}}>
        <Text style={{color: '#fff'}}>
          {coin.name}, {coin.symbol}, {coin.price_usd}$
        </Text>
      </View>
    );
  }
}