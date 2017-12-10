import "react-native";
import React from "react";

import renderer from 'react-test-renderer';
import { CurrencyElement } from "./CurrencyElement";

it('renders correctly', () => {
  const rendered = renderer.create(<CurrencyElement />).toJSON();
  expect(rendered).toBeDefined();
});