// @flow
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import ScrollableTabView, { DefaultTabBar } from "react-native-scrollable-tab-view";
import { FavouriteCrypto } from "./FavouriteCrypto";
import { AllCrypto } from "./AllCrypto";
import { styles } from "../styles";
import Settings from "./Settings";

type Props = {

}

export class MainLayout extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cardsContainer}>
        <ScrollableTabView
          tabBarPosition="top"
          renderTabBar={() => <DefaultTabBar />}>
          <FavouriteCrypto tabLabel='Favourite'/>

          <AllCrypto tabLabel='Currencies'/>

          <Settings tabLabel='Settings'/>
        </ScrollableTabView>
      </View>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {}
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
