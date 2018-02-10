import "react-native";
import React from "react";
import expect from "expect";

import { Settings } from "./Settings";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Settings Component Test Case', () => {
  const component = shallow(<Settings />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});