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
      <View style={{paddingTop: 10, paddingBottom: 10, paddingRight: 5, paddingLeft: 5}}>
        <TouchableOpacity onPress={this.onCoinPressed} style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>

          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center',}}>
            <Text style={{color: '#fff', textAlign: 'center', }}>
              {this.props.index + 1}
            </Text>
          </View>

          <View style={{flex: 1, margin: 10, backgroundColor: 'powderblue'}} />

          <View style={{ flex: 10, alignSelf: 'stretch', justifyContent: 'center', }}>
            <View style={{flex: 1, flexDirection: 'column',}}>

              <View style={{ flex: 1 }}>
                <Text style={{color: '#fff'}}>
                  {coin.name}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text>
                  <Text style={{color: '#fff'}}>
                    {coin.symbol}
                  </Text>
                </Text>
              </View>

            </View>
          </View>

          <View style={{ flex: 6, alignSelf: 'stretch' }}>
            <Text style={{color: '#fff', textAlign: 'center' }}>
              {coin.price_usd}$
            </Text>
          </View>

          <View style={{ flex: 3, alignSelf: 'stretch',}}>
            <Text style={{color: '#fff', textAlign: 'right'}}>
              {coin.percent_change_24h}%
            </Text>
          </View>

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