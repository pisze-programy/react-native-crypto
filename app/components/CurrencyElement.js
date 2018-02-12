// @flow
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import type { Coin } from "../types/coins";
import { showCryptoDetails } from "../actions/navActions";
import type { Connector } from "react-redux";
import { connect } from "react-redux";

import type { Dispatch } from "../types";
import type { Nav } from "../types/nav";
import CurrencyFormatter from "./CurrencyFormatter";
import Icon from 'react-native-vector-icons/FontAwesome';

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

              <View style={{ flex: 1, flexDirection: 'row'}}>

                <View style={{flex: 10}}>
                  <Text style={{color: '#fff'}}>
                    {coin.name}
                  </Text>
                </View>

                {coin.is_favourite && (
                  <View style={{flex: 1, justifyContent: 'center',}}>
                    <Icon name="star" size={10} color="#fff" style={{fontWeight: 100, color: '#e6d859', textAlign: 'right'}} />
                  </View>
                )}

                {coin.is_notify && (
                  <View style={{flex: 1, justifyContent: 'center',}}>
                    <Icon name="bell" size={10} color="#fff" style={{fontWeight: 100, color: '#008790', textAlign: 'right'}} />
                  </View>
                )}

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
            <CurrencyFormatter currency={coin.price_usd} after='$' styles={{color: '#fff', textAlign: 'center' }} />
          </View>

          <View style={{ flex: 3, alignSelf: 'stretch',}}>
            <CurrencyFormatter currency={coin.percent_change_24h} after='%' styles={{color: coin.percent_change_24h <= 0 ? '#f84d55' : '#1da075', textAlign: 'right'}} />
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