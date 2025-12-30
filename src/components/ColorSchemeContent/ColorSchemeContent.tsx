// src/components/layout/ColorSchemeContent.tsx
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '../Icons/classic/DarkModeIcon';
import LightModeIcon from '../Icons/classic/LightModeIcon';
import { OurIconButton } from '../IconButton/IconButton';
import { THEME_DARK, THEME_LIGHT } from '@ska-telescope/ska-javascript-components';
import { Help } from '../HelpModal/HelpModal';
import { Telescope } from '../TelescopeSelector/TelescopeSelector';
import BorderedSection from '../BorderedSection/BorderedSection';
import { getColors } from '../../utils/getColors/getColors';

export type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
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

  const setThemeMode = () =>
    localStorage.setItem(
      'skao_theme_mode',
      getThemeMode() === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    );

  const getThemeMode = () =>
    useBrowserStorage ? localStorage.getItem('skao_theme_mode') : storage.themeMode;

  const themeToggle = () => (useBrowserStorage ? setThemeMode() : storage.toggleTheme());

  const isDarkTheme = getThemeMode() === THEME_DARK;

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

  // Helper: should a given section be shown?
  // If colors is empty → show all sections
  // If colors has values → show only when sectionId is in colors
  const shouldShowSection = (sectionId: string) =>
    colors.length === 0 || colors.includes(sectionId);

  const telescopeColors = getColors({
    type: 'telescope',
    colors: ['low', 'mid'],
    content: 'both',
    asArray: false,
  });

  const observationTypeColors = getColors({
    type: 'observationType',
    colors: ['continuum', 'spectral', 'pst'],
    content: 'both',
    asArray: false,
  });

  const booleanTypeColors = getColors({
    type: 'boolean',
    colors: ['yes', 'no'],
    content: 'both',
    asArray: false,
  });

  const logoColors = getColors({
    type: 'logo',
    colors: ['1', '2'],
    content: 'both',
    asArray: false,
  });

  const chartColors = getColors({
    type: 'chart',
    colors: '*',
    content: 'both',
    asArray: false,
  });

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.default, // background reflects current scheme
      }}
    >
      {/* Top section: Color Scheme toggle (always shown) */}
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
        {/* Mode Selection: always visible */}
        <BorderedSection title="Color Options" titleSize="subtitle1">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Current Mode:</Typography>
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
          </Stack>
        </BorderedSection>

        {/* Telescope colors section */}
        {shouldShowSection('telescope') && (
          <BorderedSection title="Telescope colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {telescopeColors &&
                Object.entries(telescopeColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
            </Stack>
          </BorderedSection>
        )}

        {/* Boolean colors section */}
        {shouldShowSection('boolean') && (
          <BorderedSection title="Boolean colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {booleanTypeColors &&
                Object.entries(booleanTypeColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
            </Stack>
          </BorderedSection>
        )}

        {/* Logo colors section */}
        {shouldShowSection('logo') && (
          <BorderedSection title="Logo colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {logoColors &&
                Object.entries(logoColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
            </Stack>
          </BorderedSection>
        )}

        {/* Observation Type colors section */}
        {shouldShowSection('observationType') && (
          <BorderedSection title="Observation Type colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {observationTypeColors &&
                Object.entries(observationTypeColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
            </Stack>
          </BorderedSection>
        )}

        {/* Chart colors section */}
        {shouldShowSection('chart') && (
          <BorderedSection title="Chart colors" titleSize="subtitle1">
            <Stack direction="row" spacing={2} alignItems="center">
              {chartColors &&
                Object.entries(chartColors).map(([key, { bg, fg }]) =>
                  colorBox(bg, fg, key.toUpperCase()),
                )}
            </Stack>
          </BorderedSection>
        )}
      </Grid>
    </Grid>
  );
}
