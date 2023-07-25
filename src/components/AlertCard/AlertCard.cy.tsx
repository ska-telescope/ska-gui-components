import React from 'react';
import AlertCard from './AlertCard';

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
    cy.mount(<AlertCard title="alertCard.title" array={DUMMY_DATA} />);
  });
  it('renders : filled', () => {
    cy.mount(<AlertCard title="alertCard.title" array={DUMMY_DATA} filled />);
  });
  it('renders : with a provided function', () => {
    cy.mount(
      <AlertCard
        title="alertCard.title"
        array={DUMMY_DATA}
        clickFunction={cy.stub().as('clicked')}
      />
    );
    cy.get('[data-testid="AlertCard"]').click({ multiple: true });
  });
});
