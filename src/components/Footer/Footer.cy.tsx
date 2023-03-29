import React from 'react';
import { mount } from 'cypress/react18';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders', () => {
    mount(<Footer />);
  });
});
