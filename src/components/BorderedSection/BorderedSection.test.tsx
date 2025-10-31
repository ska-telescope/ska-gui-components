import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BorderedSection from './BorderedSection';

const theme = createTheme();

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('BorderedSection', () => {
  it('renders without crashing', () => {
    renderWithTheme(<BorderedSection>Content</BorderedSection>);
  });

  it('applies dashed border when dashed is true', () => {
    const { container } = renderWithTheme(
      <BorderedSection dashed title="Dashed">
        Content
      </BorderedSection>,
    );
    const fieldset = container.querySelector('fieldset')!;
    const styles = window.getComputedStyle(fieldset);
    expect(styles.borderStyle).toBe('dashed');
  });
});
