// @flow
import React, { Component, PropTypes } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

import Icon from 'react-native-vector-icons/FontAwesome';
import type { Connector } from 'react-redux';
import { connect } from "react-redux";
import { backPressed, hideSearchInput, openFavourite, openSettings, showSearchInput } from "../actions/navActions";

import type { Dispatch } from "../types";
import type { Nav } from "../types/nav";

type Props = {
  nav: Nav,
  dispatch: Dispatch,
}

type State = {}

export class Header extends Component<Props, State> {
  onHideSearchInput: Function;
  onOpenSearchInput: Function;
  onBackBtnPressed: Function;
  onMenuPressed: Function;
  onFavouritePressed: Function;

  constructor(props: Props) {
    super(props);

    this.state = {};

    this.onHideSearchInput = this.onHideSearchInput.bind(this);
    this.onOpenSearchInput = this.onOpenSearchInput.bind(this);
    this.onBackBtnPressed = this.onBackBtnPressed.bind(this);
    this.onMenuPressed = this.onMenuPressed.bind(this);
    this.onFavouritePressed = this.onFavouritePressed.bind(this);
  }

  onHideSearchInput () {
    this.props.dispatch(hideSearchInput(this.props.nav));
  }

  onOpenSearchInput () {
    if (this.props.nav.isSettingsActive) {
      return false;
    }

    this.props.dispatch(showSearchInput(this.props.nav));
  }

  onBackBtnPressed () {
    this.props.dispatch(backPressed(this.props.nav))
  }

  onMenuPressed () {
    this.props.dispatch(openSettings(this.props.nav));
  }

  onFavouritePressed () {
    this.props.dispatch(openFavourite(this.props.nav));
  }

  render() {
    const backBtnPadder = this.props.nav && this.props.nav.isBackBtnActive ? {paddingLeft: 25} : {};

    return (
      <View>
        <View>
          <StatusBar
            backgroundColor="#1da075"
            barStyle="light-content"
          />
        </View>
        <View style={styles.mainHeaderContainer}>
          <View style={{flex: 1}}>
            {this.props.nav.isBackBtnActive && (
              <TouchableOpacity onPress={this.onBackBtnPressed}>
                <Text style={{paddingLeft: 20}}>
                  <Icon name="long-arrow-left" size={19} color="#fff" style={{fontWeight: 100}} />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {!this.props.nav.isSearchActive ? (
            <View style={{flex: 8}}>
              <Text style={[{margin: 0, fontSize: 17, textAlign: 'left', color: '#fff', fontWeight: 'bold', textAlign: 'left',}, backBtnPadder]}>
                Crypto Currency Cap
              </Text>
            </View>
          ) : (
            <View style={{flex: 8}}>
              <TextInput
                style={{height: 40, color: '#fff', marginLeft: 20, marginRight: 20,}}
                autoFocus={true}
                placeholderTextColor={'#fff'}
                placeholder="Search for currency"
                onChangeText={(text) => {}} />
            </View>
          )}

          <View style={{flex: 1}}>
            {!this.props.nav.isSearchActive ? (
              <TouchableOpacity onPress={this.onOpenSearchInput}>
                <Text style={{textAlign: 'left', paddingLeft: 0}}>
                  <Icon name="search" size={19} color={this.props.nav.isSettingsActive ? "#188663" : "#fff"} />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.onHideSearchInput}>
                <Text style={{textAlign: 'left', paddingLeft: 0}}>
                  <Icon name="times" size={19} color="#fff" style={{fontWeight: 100}} />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.onFavouritePressed}>
              <Text style={{textAlign: 'center', paddingRight: 10}}>
                <Icon name={this.props.nav.isFavouriteActive ? 'star' : 'star-o'} size={19} color={this.props.nav.isFavouriteActive ? '#188663' : '#fff'} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.onMenuPressed}>
              <Text style={{textAlign: 'right', paddingRight: 15}}>
                <Icon name="cog" size={19} color={this.props.nav.isSettingsActive ? '#188663' : '#fff'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default connector(Header);