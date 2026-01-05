// src/components/layout/ColorSchemeContent.tsx
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '../Icons/classic/DarkModeIcon';
import LightModeIcon from '../Icons/classic/LightModeIcon';
import { OurIconButton } from '../IconButton/IconButton';
import {
  COLOR_PALETTE_SETS,
  THEME_DARK,
  THEME_LIGHT,
} from '@ska-telescope/ska-javascript-components';
import { Help } from '../HelpModal/HelpModal';
import { Telescope } from '../TelescopeSelector/TelescopeSelector';
import BorderedSection from '../BorderedSection/BorderedSection';
import { getColors } from '../../utils/getColors/getColors';
import DropDown from '../DropDown/DropDown';

export type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;

  colorMode?: number;
  updateColorMode?: (value: number) => void; // <-- added

  themeMode: string;
  toggleTheme: Function;

  updateTelescope?: Function;
};

export interface ColorSchemeContent {
  colors?: string[];
  storage: Storage;
  toolTip?: { skao: string; mode: string };
  useBrowserStorage?: boolean;
}

export default function ColorSchemeContent({
  colors = [],
  storage,
  toolTip = { skao: 'SKAO', mode: '' },
  useBrowserStorage = false,
}: ColorSchemeContent) {
  const theme = useTheme();

  // -----------------------------
  // THEME MODE (light/dark)
  // -----------------------------
  const getThemeMode = () =>
    useBrowserStorage ? localStorage.getItem('skao_theme_mode') : storage.themeMode;

  const setThemeMode = () =>
    localStorage.setItem(
      'skao_theme_mode',
      getThemeMode() === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    );

  const themeToggle = () => (useBrowserStorage ? setThemeMode() : storage.toggleTheme());

  const isDarkTheme = getThemeMode() === THEME_DARK;

  // -----------------------------
  // COLOR MODE (palette index)
  // -----------------------------
  const getColorMode = (): number =>
    parseInt(
      String(
        useBrowserStorage ? localStorage.getItem('skao_color_mode') : (storage.colorMode ?? 0),
      ),
      10,
    );

  const setColorMode = (value: string) => {
    if (useBrowserStorage) {
      localStorage.setItem('skao_color_mode', value);
    } else if (storage.updateColorMode) {
      storage.updateColorMode(Number(value));
    }
  };

  // -----------------------------
  // Helper for color preview boxes
  // -----------------------------
  const colorBox = (bgColor: any, fgColor: any, label: string) => (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: 1,
        px: 1,
        display: 'inline-flex',
      }}
    >
      <Typography variant="body2" color={fgColor} sx={{ whiteSpace: 'nowrap', p: 1 }}>
        {label}
      </Typography>
    </Box>
  );

  // -----------------------------
  // Section visibility helper
  // -----------------------------
  const shouldShowSection = (sectionId: string) =>
    colors.length === 0 || colors.includes(sectionId);

  // -----------------------------
  // Color groups
  // -----------------------------
  const paletteIndex = getColorMode();

  const telescopeColors = getColors({
    type: 'telescope',
    colors: ['low', 'mid'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const observationTypeColors = getColors({
    type: 'observationType',
    colors: ['continuum', 'spectral', 'pst'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const booleanTypeColors = getColors({
    type: 'boolean',
    colors: ['yes', 'no'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const logoColors = getColors({
    type: 'logo',
    colors: ['1', '2'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const buttonColors = {
    primary: {
      bg: theme.palette.primary.main,
      fg: theme.palette.primary.contrastText,
    },
    secondary: {
      bg: theme.palette.secondary.main,
      fg: theme.palette.secondary.contrastText,
    },
  };

  const applicationStatusColors = {
    success: {
      bg: theme.palette.success.main,
      fg: theme.palette.success.contrastText,
    },
    warning: {
      bg: theme.palette.warning.main,
      fg: theme.palette.warning.contrastText,
    },
    error: {
      bg: theme.palette.error.main,
      fg: theme.palette.error.contrastText,
    },
    info: {
      bg: theme.palette.info.main,
      fg: theme.palette.info.contrastText,
    },
  };

  const chartColors = getColors({
    type: 'chart',
    colors: '*',
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Header */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2 }}
      >
        <Typography variant="h6" fontWeight={600}>
          Color Scheme
        </Typography>
      </Grid>

      <Grid container direction="column" sx={{ p: 2 }}>
        {/* Mode Selection */}
        <BorderedSection title="Color Options" titleSize="subtitle1">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Light / Dark:</Typography>

            <OurIconButton
              ariaTitle="light/dark mode"
              onClick={() => themeToggle()}
              icon={
                isDarkTheme ? (
                  <DarkModeIcon colorFG={useTheme().palette.secondary.main} />
                ) : (
                  <LightModeIcon colorFG={useTheme().palette.secondary.main} />
                )
              }
              toolTip={toolTip.mode}
            />

            <Typography variant="body2">Color Mode:</Typography>

            <DropDown
              ariaTitle="aria Title"
              ariaDescription="aria Description"
              disabled={false}
              errorText=""
              label=""
              options={COLOR_PALETTE_SETS.map(
                (set: { label: any }, index: { toString: () => any }) => ({
                  label: set.label,
                  value: index.toString(),
                  disabled: false,
                }),
              )}
              required={false}
              value={getColorMode()}
              setValue={(newValue: string) => setColorMode(newValue)}
              testId="testId"
              toolTip="tooltip"
            />
          </Stack>
        </BorderedSection>

        {/* Telescope + Logo */}
        <Grid container direction="row" justifyContent="space-between">
          {shouldShowSection('telescope') && (
            <BorderedSection title="Telescope colors" titleSize="subtitle1">
              <Stack direction="row" spacing={2} alignItems="center">
                {Object.entries(telescopeColors ?? {}).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
              </Stack>
            </BorderedSection>
          )}

          {shouldShowSection('logo') && (
            <BorderedSection title="Logo colors" titleSize="subtitle1">
              <Stack direction="row" spacing={2} alignItems="center">
                {Object.entries(logoColors ?? {}).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
              </Stack>
            </BorderedSection>
          )}
        </Grid>

        {/* Button + Boolean */}
        <Grid container direction="row" justifyContent="space-between">
          {shouldShowSection('button') && (
            <BorderedSection title="Button colors" titleSize="subtitle1">
              <Stack direction="row" spacing={2} alignItems="center">
                {Object.entries(buttonColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
              </Stack>
            </BorderedSection>
          )}

          {shouldShowSection('boolean') && (
            <BorderedSection title="Boolean colors" titleSize="subtitle1">
              <Stack direction="row" spacing={2} alignItems="center">
                {Object.entries(booleanTypeColors ?? {}).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
              </Stack>
            </BorderedSection>
          )}
        </Grid>

        {/* Status */}
        {shouldShowSection('status') && (
          <BorderedSection title="Application Status colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {Object.entries(applicationStatusColors ?? {}).map(([key, { bg, fg }]) =>
                colorBox(bg, fg, key.toUpperCase()),
              )}
            </Stack>
          </BorderedSection>
        )}

        {/* Observation Type */}
        {shouldShowSection('observationType') && (
          <BorderedSection title="Observation Type colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {Object.entries(observationTypeColors ?? {}).map(([key, { bg, fg }]) =>
                colorBox(bg, fg, key.toUpperCase()),
              )}
            </Stack>
          </BorderedSection>
        )}

        {/* Chart */}
        {shouldShowSection('chart') && (
          <BorderedSection title="Chart colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {Object.entries(chartColors ?? {}).map(([key, { bg, fg }]) =>
                colorBox(bg, fg, key.toUpperCase()),
              )}
            </Stack>
          </BorderedSection>
        )}
      </Grid>
    </Grid>
  );
}
