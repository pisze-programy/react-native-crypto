// @flow
import React, { Component, PropTypes } from 'react';
import { View } from "react-native";
import { styles } from "../styles";

type Props = {
  name?: string,
}

export class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainHeader}>
        {/*<Text>*/}
          {/*{this.props.name}*/}
        {/*</Text>*/}
      </View>
    );
  }
}