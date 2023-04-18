import React from 'react';
import { mount } from 'cypress/react18';
import AlertCard from './AlertCard';
import '../../services/i18n/i18n';

const DUMMY_DATA = [
  { level: 0, title: 'alertCard.0', filled: true, value: 1, hideValue: true },
  { level: 1, title: 'alertCard.1', filled: true, value: 1, hideValue: false },
  { level: 2, title: 'alertCard.2', filled: true, value: 1, hideValue: true },
  { level: 3, title: 'alertCard.3', filled: true, value: 1, hideValue: false },
  { level: 4, title: 'alertCard.4', filled: true, value: 1, hideValue: true },
  { level: 5, title: 'alertCard.5', filled: true, value: 1, hideValue: false },
  { level: 6, title: 'alertCard.6', filled: true, value: 1, hideValue: true },
  { level: 0, title: 'alertCard.0', filled: false, value: 1, hideValue: false },
  { level: 1, title: 'alertCard.1', filled: false, value: 1, hideValue: true },
  { level: 2, title: 'alertCard.2', filled: false, value: 1, hideValue: false },
  { level: 3, title: 'alertCard.3', filled: false, value: 1, hideValue: true },
  { level: 4, title: 'alertCard.4', filled: false, value: 1, hideValue: false },
  { level: 5, title: 'alertCard.5', filled: false, value: 1, hideValue: true },
  { level: 6, title: 'alertCard.6', filled: false, value: 1, hideValue: false },
];

describe('<AlertCard />', () => {
  it('renders : pastel', () => {
    mount(<AlertCard title="alertCard.title" array={DUMMY_DATA} filled={false} />);
  });
  it('renders : filled', () => {
    mount(<AlertCard title="alertCard.title" array={DUMMY_DATA} filled />);
  });
});
