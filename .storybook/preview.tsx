import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themeFactory from "../src/components/theme/theme";
import {
  THEME_LIGHT,
  ACCESSIBILITY_DEFAULT,
} from "@ska-telescope/ska-javascript-components";

const storybookTheme = themeFactory({
  themeMode: THEME_LIGHT,
  accessibilityMode: ACCESSIBILITY_DEFAULT,
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={storybookTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;