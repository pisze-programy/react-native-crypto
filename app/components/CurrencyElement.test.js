import "react-native";
import React from "react";
import expect from "expect";

import { CurrencyElement } from "./CurrencyElement";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CurrencyElement Component Test Case', () => {
  const component = shallow(<CurrencyElement coin={{
    "id": "pivx",
    "name": "PIVX",
    "symbol": "PIVX",
    "rank": "50",
    "price_usd": "5.75515",
    "price_btc": "0.00030529",
    "24h_volume_usd": "4907870.0",
    "market_cap_usd": "317290010.0",
    "available_supply": "55131493.0",
    "total_supply": "55131493.0",
    "max_supply": null,
    "percent_change_1h": "-2.01",
    "percent_change_24h": "5.34",
    "percent_change_7d": "21.74",
    "last_updated": "1513450762"
  }} index={1} />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});