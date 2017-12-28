// @flow
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import type { Coin } from "../types/coins";
import { showCryptoDetails } from "../actions/navActions";
import type { Connector } from "react-redux";
import { connect } from "react-redux";

import type { Dispatch } from "../types";
import type { Nav } from "../types/nav";

type Props = {
  coin: Coin,
  index: number,
  nav: Nav,
  dispatch: Dispatch,
}

type State = {}

export class CurrencyElement extends Component<Props, State> {
  onCoinPressed: Function;

  constructor(props: Props) {
    super(props);

    this.onCoinPressed = this.onCoinPressed.bind(this);
  }

  onCoinPressed () {
    this.props.dispatch(showCryptoDetails(this.props.nav))
  }

  render() {
    const coin = this.props.coin;
    return (
      <View style={{backgroundColor: '#000', padding: 20}}>
        <TouchableOpacity onPress={this.onCoinPressed}>

          <Text style={{color: '#fff'}}>
            {coin.name}, {coin.symbol}, {coin.price_usd}$
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  }
}

const connector: Connector<State, Props> = connect(mapStateToProps);

export default connector(CurrencyElement);