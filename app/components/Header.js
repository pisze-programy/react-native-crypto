// @flow
import React, { Component, PropTypes } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name?: string,
}

type State = {
  isSearchActive: boolean,
  isBackBtnActive: boolean,
}

export class Header extends Component<Props, State> {
  toggleSearchInput: Function;
  onBackBtnPressed: Function;
  onMenuPressed: Function;
  onFavouritePressed: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      isSearchActive: false,
      isBackBtnActive: false,
    };

    this.toggleSearchInput = this.toggleSearchInput.bind(this);
    this.onBackBtnPressed = this.onBackBtnPressed.bind(this);
    this.onMenuPressed = this.onMenuPressed.bind(this);
    this.onFavouritePressed = this.onFavouritePressed.bind(this);

  }

  toggleSearchInput () {
    this.setState(Object.assign({}, this.state, {isSearchActive: !this.state.isSearchActive}));
  }

  onBackBtnPressed () {
    //
  }

  onMenuPressed () {
    //
  }

  onFavouritePressed () {
    //
  }

  render() {
    const backBtnPadder = this.state.isBackBtnActive ? {paddingLeft: 25} : {};

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
            {this.state.isBackBtnActive && (
              <TouchableOpacity onPress={this.onBackBtnPressed}>
                <Text style={{paddingLeft: 20}}>
                  <Icon name="long-arrow-left" size={19} color="#fff" style={{fontWeight: 100}} />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {!this.state.isSearchActive ? (
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
            {!this.state.isSearchActive ? (
              <TouchableOpacity onPress={this.toggleSearchInput}>
                <Text style={{textAlign: 'left', paddingLeft: 0}}>
                  <Icon name="search" size={19} color="#fff" />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.toggleSearchInput}>
                <Text style={{textAlign: 'left', paddingLeft: 0}}>
                  <Icon name="times" size={19} color="#fff" style={{fontWeight: 100}} />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Text style={{textAlign: 'center', paddingRight: 10}}>
                <Icon name="star-o" size={19} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.onMenuPressed}>
              <Text style={{textAlign: 'right', paddingRight: 20}}>
                <Icon name="ellipsis-v" size={19} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}