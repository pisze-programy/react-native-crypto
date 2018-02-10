// @flow
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import type { Connector } from "react-redux";
import { connect } from "react-redux";
import type { Dispatch } from "../types";
import type { Coin } from "../types/coins";
import { loadCoin } from "../actions/coinsActions";
import { styles } from "../styles";

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
    return (
      <View style={styles.layoutContainer}>

        {this.props.coin.isFetching && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}

        {this.props.coin.error && (
          <View>
            <Text>Error while fetching</Text>
          </View>
        )}

        {this.props.coin.data && (
          <ScrollView>
            <Text>{this.props.coin.data.name}</Text>
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