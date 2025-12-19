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
  storage: Storage;
  toolTip?: { skao: string; mode: string };
  useBrowserStorage?: boolean;
}

export default function ColorSchemeContent({
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

  const midBG =
    getColors({ type: 'telescope', colors: '1', content: 'bg', asArray: true }) ?? '#000000';
  const midFG =
    getColors({ type: 'telescope', colors: '1', content: 'fg', asArray: true }) ?? '#000000';

  const lowBG =
    getColors({ type: 'telescope', colors: '2', content: 'bg', asArray: true }) ?? '#000000';
  const lowFG =
    getColors({ type: 'telescope', colors: '2', content: 'fg', asArray: true }) ?? '#000000';

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.default, // background reflects current scheme
      }}
    >
      {/* Top section: Color Scheme toggle */}
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

      {/* Additional drawer content can be added below */}
      <Grid container direction="column" sx={{ p: 2 }}>
        <BorderedSection title="Mode Selection">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Current Mode:</Typography>
            <OurIconButton
              ariaTitle="light/dark mode"
              onClick={() => themeToggle()}
              icon={
                isDarkTheme ? (
                  <DarkModeIcon colorFG={useTheme().palette.primary.main} />
                ) : (
                  <LightModeIcon colorFG={useTheme().palette.primary.main} />
                )
              }
              toolTip={toolTip.mode}
            />
          </Stack>
        </BorderedSection>
        <BorderedSection title="Telescope colors">
          <Stack direction="row" spacing={2} alignItems="center">
            {colorBox(midBG, midFG, 'MID')}
            {colorBox(lowBG, lowFG, 'LOW')}
          </Stack>
        </BorderedSection>
      </Grid>
    </Grid>
  );
}
