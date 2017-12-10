import "react-native";
import React from "react";

import renderer from 'react-test-renderer';
import FavouriteCrypto from "./FavouriteCrypto";

it('renders correctly', () => {
  const rendered = renderer.create(<FavouriteCrypto />).toJSON();
  expect(rendered).toBeDefined();
});