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
            <Text style={{margin: 0, fontSize: 17, textAlign: 'left', color: '#fff', fontWeight: 'bold', textAlign: 'center',}}>{coin.data.name} ({coin.data.symbol})</Text>

            <VictoryChart theme={VictoryTheme.material}>
              <VictoryArea
                style={{ data: { fill: "#1da075" } }}
                data={[
                  { x: 1, y: 2, y0: 0 },
                  { x: 2, y: 3, y0: 0 },
                  { x: 3, y: 5, y0: 0 },
                  { x: 4, y: 4, y0: 0 },
                  { x: 6, y: 60, y0: 0 },
                  { x: 7, y: 55, y0: 0 },
                  { x: 8, y: 50, y0: 0 },
                  { x: 9, y: 25, y0: 0 },
                  { x: 10, y: 30, y0: 0 },
                  { x: 11, y: 60, y0: 0 },
                  { x: 12, y: 50, y0: 0 },
                  { x: 13, y: 45, y0: 0 },
                  { x: 14, y: 45, y0: 0 },
                  { x: 15, y: 45, y0: 0 },
                  { x: 16, y: 45, y0: 0 },
                  { x: 17, y: 45, y0: 0 },
                  { x: 18, y: 45, y0: 0 },
                  { x: 19, y: 45, y0: 0 },
                  { x: 20, y: 45, y0: 0 },
                  { x: 21, y: 45, y0: 0 },
                ]}
              />
            </VictoryChart>

            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>
              <View style={{ flex: 3 }}>
                <Text style={{color: '#fff', textAlign: 'left', }}>
                  Rank
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <Text style={{color: '#fff', textAlign: 'right' }}>
                  {coin.data.rank}
                </Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>
              <View style={{ flex: 3 }}>
                <Text style={{color: '#fff', textAlign: 'left', }}>
                  Market cap
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <CurrencyFormatter currency={coin.data.market_cap_usd} before='$' styles={{color: '#fff', textAlign: 'right' }} />
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>
              <View style={{ flex: 3 }}>
                <Text style={{color: '#fff', textAlign: 'left', }}>
                  Circulating supply
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <CurrencyFormatter currency={coin.data.available_supply} after={coin.data.symbol} styles={{color: '#fff', textAlign: 'right' }} />
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>
              <View style={{ flex: 3 }}>
                <Text style={{color: '#fff', textAlign: 'left', }}>
                  Volume 24H
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <CurrencyFormatter currency={coin.data['24h_volume_usd']} before='EUR' styles={{color: '#fff', textAlign: 'right' }} />
              </View>
            </View>

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