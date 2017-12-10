// @flow
import React, { Component, PropTypes } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name?: string,
}

type State = {
  searchActive: boolean,
}

export class Header extends Component<Props, State> {
  toggleSearchInput: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      searchActive: false,
    };

    this.toggleSearchInput = this.toggleSearchInput.bind(this);
  }

  toggleSearchInput () {
    console.log('hej', this.state);
    this.setState(Object.assign({}, this.state, {searchActive: !this.state.searchActive}));
  }

  render() {
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
            {this.state.searchActive && (
              <TouchableOpacity onPress={this.toggleSearchInput}>
                <Text style={{textAlign: 'left', paddingLeft: 20}}>
                  <Icon name="arrow-left" size={19} color="#fff" />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{flex: 8}}>
            {!this.state.searchActive ? (
              <Text style={{margin: 0, fontSize: 18, textAlign: 'left', color: '#fff', fontWeight: 'bold', textAlign: 'left'}}>
                Crypto Currency Cap
              </Text>
            ) : (
              <TextInput
                style={{height: 40, color: '#fff', marginLeft: 20, marginRight: 20}}
                autoFocus={true}
                placeholder="Search for currency"
                onChangeText={(text) => {}} />
            )}
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.toggleSearchInput}>
              <Text style={{textAlign: 'left', paddingLeft: 0}}>
                <Icon name="search" size={19} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Text style={{textAlign: 'center', paddingRight: 10}}>
                <Icon name="star-o" size={19} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
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