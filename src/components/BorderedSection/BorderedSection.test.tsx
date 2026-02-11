import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BorderedSection from './BorderedSection';

const theme = createTheme();

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('BorderedSection', () => {
  it('renders without crashing', () => {
    renderWithTheme(<BorderedSection>Content</BorderedSection>);
  });
});
