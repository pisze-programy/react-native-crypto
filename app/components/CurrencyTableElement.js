// @flow
import React from 'react';
import { Text, View } from "react-native";
import CurrencyFormatter from "./CurrencyFormatter";

type Props = {
  label: string,
  labelStyles?: any,

  value: string,
  valueStyles?: any,
  formatValue?: boolean,
  formatBefore?: string,
  formatAfter?: string,
};

const CurrencyDetails = ({label, value, labelStyles, valueStyles, formatValue, formatBefore, formatAfter}: Props) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch',}}>
      <View style={{ flex: 3 }}>
        <Text style={[{color: '#fff', textAlign: 'left'}, labelStyles]}>
          {label}
        </Text>
      </View>

      <View style={{ flex: 3 }}>
        {formatValue && (
          <CurrencyFormatter
            currency={value}
            before={formatBefore}
            after={formatAfter}
            styles={[{color: '#fff', textAlign: 'right' }, valueStyles]} />
        )}
        {!formatValue && (
          <Text style={[{color: '#fff', textAlign: 'right'}, valueStyles]}>
            {value}
          </Text>
        )}
      </View>
    </View>
  )
};

export default CurrencyDetails;