// @flow
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import type { Connector } from "react-redux";
import { connect } from "react-redux";
import CurrencyElement from "../components/CurrencyElement";
import type { Dispatch } from "../types";
import type { Coins } from "../types/coins";
import { loadCoins } from "../actions/coinsActions";
import { styles } from "../styles";
import { CurrencyTableHeader } from "../components/CurrencyTableHeader";

type Props = {
  coins: {
    data: Coins,
    error: string,
    isFetching: boolean,
  },
  dispatch: Dispatch,
}

type State = {}

export class AllCrypto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadCoins({}));
  }

  render() {
    return (
      <View style={styles.layoutContainer}>

        {this.props.coins.isFetching && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}

        {this.props.coins.error && (
          <View>
            <Text>Error while fetching</Text>
          </View>
        )}

        {this.props.coins.data && this.props.coins.data.length && (
          <ScrollView>
            <CurrencyTableHeader />

            {this.props.coins.data.map((coin, index) => {
              return (
                <CurrencyElement key={index} coin={coin} index={index}/>
              )
            })}
          </ScrollView>
        )}

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
  }
};

const connector: Connector<State, Props> = connect(mapStateToProps);

export default connector(AllCrypto);