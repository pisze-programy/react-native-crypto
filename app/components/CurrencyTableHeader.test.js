import "react-native";
import React from "react";
import expect from "expect";

import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CurrencyTableHeader } from "./CurrencyTableHeader";

configure({ adapter: new Adapter() });

describe('CurrencyElement Component Test Case', () => {
  const component = shallow(<CurrencyTableHeader />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});