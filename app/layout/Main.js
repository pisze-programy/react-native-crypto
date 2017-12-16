// @flow
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AllCrypto from "./AllCrypto";
import { styles } from "../styles";
import Header from "../components/Header";
import type { Connector } from "react-redux";
import type { Dispatch } from "../types";
import type { Nav } from "../types/nav";
import { Settings } from "./Settings";
import { FavouriteCrypto } from "./FavouriteCrypto";

type Props = {
  nav: Nav,
  dispatch: Dispatch,
}

type State = {}

export class MainLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        {this.props.nav.isSettingsActive && <Settings/>}
        {this.props.nav.isFavouriteActive && <FavouriteCrypto/>}
        {!this.props.nav.isBackBtnActive && <AllCrypto/>}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  }
};

const connector: Connector<State, Props> = connect(mapStateToProps);

export default connector(MainLayout);