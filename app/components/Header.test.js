import "react-native";
import React from "react";

import renderer from 'react-test-renderer';
import { Header } from "./Header";

it('renders correctly', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeDefined();
});