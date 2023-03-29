import React from 'react';
import { mount } from 'cypress/react18';
import Header from './Header';

describe('<Header />', () => {
  const themeToggle = () => {}; 
  it('renders', () => {
    mount(<Header themeToggle={themeToggle} />);
  });
});
