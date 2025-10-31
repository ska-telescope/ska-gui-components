import React from 'react';
import BorderedSection from './BorderedSection';

export default {
  title: 'Example/BorderedSection',
  component: BorderedSection,
  parameters: {
    layout: 'centered',
  },
};

export const Light = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    title: "Dummy title",
    testId: 'testId'
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    title: "Dummy title",
    testId: 'testId'
  },
};
