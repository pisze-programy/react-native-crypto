// @flow
import React from 'react';
import { Text } from "react-native";

type Props = {
  currency: string,
  before?: string,
  after?: string,
  styles?: any,
};

const CurrencyFormatter = ({currency, before, after, styles}: Props) => {
  const value = currency.replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
  return (
    <Text style={styles}>
      {before ? <Text style={{fontWeight: '100', fontSize: 11}}>{before} </Text> : null}
      {value}
      {after ? <Text style={{fontWeight: '100', fontSize: 11}}> {after}</Text> : null}
    </Text>
  )
};

export default CurrencyFormatter;