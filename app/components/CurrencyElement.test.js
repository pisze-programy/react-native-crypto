import "react-native";
import React from "react";
import expect from "expect";

import { CurrencyElement } from "./CurrencyElement";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CurrencyElement Component Test Case', () => {
  const component = shallow(<CurrencyElement />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});