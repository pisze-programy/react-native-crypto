import "react-native";
import React from "react";
import { MainLayout } from "./Main.js";

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const rendered = renderer.create(<MainLayout />).toJSON();
  expect(rendered).toBeDefined();
});