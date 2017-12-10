import "react-native";
import React from "react";

import renderer from 'react-test-renderer';
import Settings from "./Settings";

it('renders correctly', () => {
  const rendered = renderer.create(<Settings />).toJSON();
  expect(rendered).toBeDefined();
});