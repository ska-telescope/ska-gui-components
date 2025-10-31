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
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    renderWithTheme(<BorderedSection title="My Title">Content</BorderedSection>);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('applies dashed border when dashed is true', () => {
    const { container } = renderWithTheme(
      <BorderedSection dashed title="Dashed">
        Content
      </BorderedSection>
    );
    const fieldset = container.querySelector('fieldset')!;
    const styles = window.getComputedStyle(fieldset);
    expect(styles.borderStyle).toBe('dashed');
  });

  it('applies elevation box shadow', () => {
    const { container } = renderWithTheme(
      <BorderedSection elevation={2} title="Elevated">
        Content
      </BorderedSection>
    );
    const fieldset = container.querySelector('fieldset');
    expect(fieldset).toHaveStyle(`box-shadow: ${theme.shadows[2]}`);
  });
});
