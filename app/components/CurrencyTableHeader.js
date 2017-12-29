// @flow
import React, { Component, PropTypes } from 'react';
import { Text, View } from "react-native";
import type { Connector } from 'react-redux';

type Props = {}

type State = {}

export class CurrencyTableHeader extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        paddingRight: 5, paddingLeft: 5, flex: 1, flexDirection: 'row', alignSelf: 'stretch',
      }}>

        <View style={{ flex: 2, alignSelf: 'stretch', justifyContent: 'center',}}>
          <Text style={{color: '#fff'}}>
            No.
          </Text>
        </View>

        <View style={{ flex: 10, alignSelf: 'stretch', }}>
          <Text style={{color: '#fff', textAlign: 'left', paddingLeft: 20}}>
            Name
          </Text>
        </View>

        <View style={{ flex: 6, alignSelf: 'stretch', }}>
          <Text style={{color: '#fff', textAlign: 'center' }}>
            USD
          </Text>
        </View>

        <View style={{ flex: 3, alignSelf: 'stretch',}}>
          <Text style={{color: '#fff',  textAlign: 'right' }}>
            % (24H)
          </Text>
        </View>

      </View>
    );
  }
}