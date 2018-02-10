// @flow
import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { loadFavouriteCoins } from "../actions/coinsActions";
import type { Coins } from "../types/coins";
import type { Dispatch } from "../types";
import { styles } from "../styles";
import CurrencyElement from "../components/CurrencyElement";
import type { Connector } from "react-redux";
import { CurrencyTableHeader } from "../components/CurrencyTableHeader";

type Props = {
  coins: Coins,
  dispatch: Dispatch,
}

type State = {}

export class FavouriteCrypto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadFavouriteCoins());
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

export default connector(FavouriteCrypto);