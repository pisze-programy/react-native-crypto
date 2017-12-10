// @flow
import React, { Component, PropTypes } from 'react';
import { StatusBar, Text, TouchableHighlight, View } from "react-native";
import { styles } from "../styles";

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name?: string,
}

export class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <StatusBar
            backgroundColor="black"
            barStyle="light-content"
          />
        </View>
        <View style={styles.mainHeaderContainer}>
          <TouchableHighlight>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
              Text
              <Icon name="rocket" size={30} color="#900" />
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}