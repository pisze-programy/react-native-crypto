// @flow
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import type { Connector } from "react-redux";
import { connect } from "react-redux";
import type { Dispatch } from "../types";
import type { Coin } from "../types/coins";
import { loadCoin } from "../actions/coinsActions";
import { styles } from "../styles";

import { VictoryChart, VictoryAxis, VictoryTheme, VictoryCandlestick } from "victory-native";

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
    console.log('crypto', this.props.coin);
    return (
      <View style={styles.layoutContainer}>
        {this.props.coin.isFetching && (
          <View>
            <Text style={{color: '#fff'}}>Loading...</Text>
          </View>
        )}

        {this.props.coin.error && (
          <View>
            <Text style={{color: '#fff'}}>Error while fetching</Text>
          </View>
        )}

        {this.props.coin.data && (
          <ScrollView>
            <Text style={{color: '#fff'}}>{this.props.coin.data.name}</Text>

            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={{ x: 25 }}
              scale={{ x: "time" }}
            >
              <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
              <VictoryAxis dependentAxis/>
              <VictoryCandlestick
                candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                data={[
                  {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                  {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                  {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                  {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                  {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
                ]}
              />
            </VictoryChart>
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