import "react-native";
import React from "react";
import expect from "expect";

import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainLayout } from "./Main";

configure({ adapter: new Adapter() });

describe('Header Component Test Case', () => {
  const component = shallow(<MainLayout dispatch={() => {}} nav={{
    isSearchActive: false,
    isBackBtnActive: false,
    isFavouriteActive: false,
    isSettingsActive: false,
  }} />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});