import FrequencySpectrum from './FrequencySpectrum';

export default {
  title: 'Example/FrequencySpectrum',
  component: FrequencySpectrum,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    minFreq: 49.609375,
    maxFreq: 349.609375,
    centerFreq: 199.609375,
    bandWidth: 75,
    // minEdge: 75,
    // maxEdge: 325,
    unit: 'MHz',
    bandColor: '#f2ca00',
    bandColorContrast: '#000000',
    boxWidth: '600px',
    actual: false,
  },
};
