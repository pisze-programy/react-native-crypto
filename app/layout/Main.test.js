import "react-native";
import React from "react";
import expect from "expect";

import { MainLayout } from "./Main";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MainLayout Component Test Case', () => {
  const component = shallow(<MainLayout />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});