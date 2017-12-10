import "react-native";
import React from "react";

import renderer from 'react-test-renderer';
import AllCrypto from "./AllCrypto";

it('renders correctly', () => {
  const rendered = renderer.create(<AllCrypto />).toJSON();
  expect(rendered).toBeDefined();
});