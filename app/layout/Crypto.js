// @flow
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import type { Connector } from "react-redux";
import { connect } from "react-redux";
import type { Dispatch } from "../types";
import type { Coin } from "../types/coins";
import { loadCoin } from "../actions/coinsActions";
import { styles } from "../styles";

import { VictoryChart, VictoryArea, VictoryTheme } from "victory-native";
import CurrencyFormatter from "../components/CurrencyFormatter";
import CurrencyDetails from "../components/CurrencyTableElement";
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  coin: {
    data: Coin,
    error: string,
    isFetching: boolean,
  },
  dispatch: Dispatch,
}

type State = {}

export class Crypto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadCoin({}));
  }

  render() {
    const coin = this.props.coin;
    return (
      <View style={styles.layoutContainer}>
        {coin.isFetching && (
          <View>
            <Text style={{color: '#fff'}}>Loading...</Text>
          </View>
        )}

        {coin.error && (
          <View>
            <Text style={{color: '#fff'}}>Error while fetching</Text>
          </View>
        )}

        {coin.data && (
          <ScrollView>
            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1,}}>
                {coin.data.is_favourite && (
                  <Icon name="star" size={19} color="#fff" style={{fontWeight: 100, color: '#e6d859', alignSelf: 'center'}} />
                )}

                {!coin.data.is_favourite && (
                  <Icon name="star-o" size={19} color="#fff" style={{fontWeight: 100, color: '#fff', alignSelf: 'center'}} />
                )}
              </View>
              <View style={{flex: 3,}}>
                <Text style={{
                  margin: 0,
                  fontSize: 17,
                  textAlign: 'left',
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                  {coin.data.name} ({coin.data.symbol})
                </Text>
                <CurrencyFormatter
                  styles={{
                    margin: 0,
                    fontSize: 17,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: coin.data.percent_change_24h <= 0 ? '#f84d55' : '#1da075',
                  }}
                  currency={coin.data.price_usd}
                  before='$' />
              </View>
              <View style={{flex: 1,}}>
                {coin.data.is_notify && (
                  <Icon name="bell" size={19} color="#fff" style={{fontWeight: 100, color: '#008790', alignSelf: 'center'}} />
                )}

                {!coin.data.is_notify && (
                  <Icon name="bell-o" size={19} color="#fff" style={{fontWeight: 100, color: '#fff', alignSelf: 'center'}} />
                )}
              </View>
            </View>

            <VictoryChart theme={VictoryTheme.material}>
              <VictoryArea
                style={{ data: { fill: coin.data.percent_change_24h <= 0 ? '#f84d55' : '#1da075' } }}
                data={coin.data.chartArea} />
            </VictoryChart>

            <CurrencyDetails value={coin.data.rank} label='Rank' />

            <CurrencyDetails
              value={coin.data['percent_change_1h']}
              label='% change 1H'
              formatValue={true}
              formatAfter='%'
              valueStyles={{color: coin.data.percent_change_1h <= 0 ? '#f84d55' : '#1da075'}} />
            <CurrencyDetails
              value={coin.data['percent_change_24h']}
              label='% change 24H'
              formatValue={true}
              formatAfter='%'
              valueStyles={{color: coin.data.percent_change_24h <= 0 ? '#f84d55' : '#1da075'}} />
            <CurrencyDetails
              value={coin.data['percent_change_7d']}
              label='% change 7D'
              formatValue={true}
              formatAfter='%'
              valueStyles={{color: coin.data.percent_change_7d <= 0 ? '#f84d55' : '#1da075'}} />

            <View style={{padding: 10, flex: 1, flexDirection: 'row', alignSelf: 'stretch',}} />

            <CurrencyDetails
              value={coin.data.market_cap_usd}
              label='Market cap'
              formatValue={true} formatBefore='$'/>
            <CurrencyDetails
              value={coin.data.available_supply}
              label='Circulating supply'
              formatValue={true}
              formatAfter={coin.data.symbol}/>
            <CurrencyDetails
              value={coin.data['24h_volume_usd']}
              label='Volume 24H'
              formatValue={true}
              formatBefore='EUR'/>
            <CurrencyDetails
              value={coin.data['price_btc']}
              label='BTC price'
              formatAfter='BTC'
              formatValue={true}/>
          </ScrollView>
        )}

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coin: state.coin,
  }
};

const connector: Connector<State, Props> = connect(mapStateToProps);

export default connector(Crypto);