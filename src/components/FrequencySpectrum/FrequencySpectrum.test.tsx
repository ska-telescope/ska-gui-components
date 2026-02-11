// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import { describe, it, expect } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import FrequencySpectrum from './FrequencySpectrum';
// import '@testing-library/jest-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// describe('FrequencySpectrum', () => {
//   const theme = createTheme();

//   const renderWithTheme = (props: any) =>
//     render(
//       <ThemeProvider theme={theme}>
//         <FrequencySpectrum {...props} />
//       </ThemeProvider>,
//     );

//   it('applies error color when band is outside min/max range', () => {
//     renderWithTheme({
//       minFreq: 100,
//       maxFreq: 200,
//       centerFreq: 250, // outside range
//       bandWidth: 20,
//       minEdge: 110,
//       maxEdge: 190,
//     });

//     const band = screen.getByTestId('frequencySpectrum-highlighted-band');
//     expect(band).toHaveStyle(`background-color: ${theme.palette.error.main}`);
//   });

//   it('applies warning color when band is outside edge range but inside min/max', () => {
//     renderWithTheme({
//       minFreq: 100,
//       maxFreq: 200,
//       centerFreq: 180, // band end > maxEdge
//       bandWidth: 30,
//       minEdge: 110,
//       maxEdge: 170,
//     });

//     const band = screen.getByTestId('frequencySpectrum-highlighted-band');
//     expect(band).toHaveStyle(`background-color: ${theme.palette.warning.main}`);
//   });
// });
