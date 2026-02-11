import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createSKATheme } from "../src/services/theme/createSKATheme";
import {
  THEME_LIGHT
} from "@ska-telescope/ska-javascript-components";

const storybookTheme = createSKATheme(THEME_LIGHT, 0);

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