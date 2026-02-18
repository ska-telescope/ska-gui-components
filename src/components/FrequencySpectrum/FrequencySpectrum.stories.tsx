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
    minFreq: 50,
    maxFreq: 350,
    centerFreq: 200,
    bandWidth: 100,
    minEdge: 75,
    maxEdge: 325,
    unit: 'MHz',
    bandColor: '#f2ca00',
    bandColorContrast: '#000000',
    boxWidth: '600px',
    actual: false,
  },
};
