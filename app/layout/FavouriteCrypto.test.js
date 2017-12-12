import "react-native";
import React from "react";
import expect from "expect";

import { FavouriteCrypto } from "./FavouriteCrypto";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FavouriteCrypto Component Test Case', () => {
  const component = shallow(<FavouriteCrypto />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});