import React from 'react';
import { mount } from 'cypress/react18';
import AlertCard from './AlertCard';

const DUMMY_DATA = [
  { level: 0, title: 'Level 0', value: 1, hideValue: true },
  { level: 1, title: 'Level 1', value: 1, hideValue: true },
  { level: 2, title: 'Level 2', value: 1, hideValue: true },
  { level: 3, title: 'Level 3', value: 1, hideValue: true },
  { level: 4, title: 'Level 4', value: 1, hideValue: true },
  { level: 5, title: 'Level 5', value: 1, hideValue: true },
  { level: 6, title: 'Level 6', value: 1, hideValue: true },
];

describe('<AlertCard />', () => {
  it('renders : pastel', () => {
    mount(<AlertCard title="AlertCard Title" array={DUMMY_DATA} filled={false} />);
  });
  it('renders : filled', () => {
    mount(<AlertCard title="AlertCard Title" array={DUMMY_DATA} filled />);
  });
});
