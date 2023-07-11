import React from 'react';
import { mount } from 'cypress/react18';
import InfoCard from './InfoCard';

describe('<InfoCard />', () => {
  it('renders : outlined', () => {
    mount(<InfoCard level={1} message="infoCard.message" />);
  });
  it('renders : filled', () => {
    mount(<InfoCard level={1} message="infoCard.message" filled />);
  });
});