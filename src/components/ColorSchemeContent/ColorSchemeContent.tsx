/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Checkbox, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '../Icons/classic/DarkModeIcon';
import LightModeIcon from '../Icons/classic/LightModeIcon';
import { OurIconButton } from '../IconButton/IconButton';
import {
  COLOR_PALETTE_SETS,
  THEME_DARK,
  THEME_LIGHT,
} from '@ska-telescope/ska-javascript-components';
import BorderedSection from '../BorderedSection/BorderedSection';
import { getColors } from '../../utils/getColors/getColors';
import DropDown from '../DropDown/DropDown';
import { SKABrandColor } from '../../services/theme/createSKATheme';
import { Help } from 'components/AppWrapper/AppWrapper';
import { Telescope } from 'components/TelescopeSelector/TelescopeSelector';

export type Storage = {
  accessibility?: number;
  accessibilityUpdate?: (value: number) => void;
  help?: Help;
  helpToggle?: () => void;
  telescope?: Telescope;
  themeMode: string;
  toggleTheme: () => void;
  updateTelescope?: (telescope: Telescope) => void;
  buttonVariant?: SKABrandColor;
  setButtonVariant?: (value: SKABrandColor) => void;
  flatten?: boolean;
  setFlatten?: (value: boolean) => void;
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
        useBrowserStorage
          ? localStorage.getItem('skao_accessibility_mode')
          : (storage.accessibility ?? 0),
      ),
      10,
    );

  const setColorMode = (value: string) => {
    if (useBrowserStorage) {
      localStorage.setItem('skao_accessibility_mode', value);
    } else if (storage.accessibilityUpdate) {
      storage.accessibilityUpdate(Number(value));
    }
  };

  // ------------------------------
  // Helper for color preview boxes
  // ------------------------------

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

  // -------------------------
  // Section visibility helper
  // -------------------------

  const shouldShowSection = (sectionId: string) =>
    colors.length === 0 || colors.includes(sectionId);

  // ------------
  // Color groups
  // ------------

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

  // These are not from getColors since they use the theme directly
  const buttonColors = {
    accent: {
      bg: theme.palette.secondary.main,
      fg: theme.palette.secondary.contrastText,
    },
    primary: {
      bg: theme.palette.primary.main,
      fg: theme.palette.primary.contrastText,
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

  const reviewStatusColors = getColors({
    type: 'reviewStatus',
    colors: ['to do', 'in progress', 'reviewed'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const proposalStatusColors = getColors({
    type: 'proposalStatus',
    colors: ['draft', 'under review', 'withdrawn', 'submitted'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const proposalStatusColors2 = getColors({
    type: 'proposalStatus',
    colors: ['accepted', 'rejected', 'accepted with revision'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const statusColors = getColors({
    type: 'status',
    colors: ['created', 'draft', 'submitted', 'ready', 'in progress'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const statusColors1 = getColors({
    type: 'status',
    colors: ['executing', 'observed', 'fully observed', 'complete'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  const statusColors2 = getColors({
    type: 'status',
    colors: ['suspended', 'cancelled', 'out of time', 'failed', 'failed processing'],
    content: 'both',
    asArray: false,
    paletteIndex,
  });

  // -----------------------------

  interface ColorObject {
    bg: string;
    fg: string;
  }

  const section = (title: string, colorList: any, colorList2?: any, colorList3?: any) => (
    <BorderedSection title={title} titleSize="subtitle1">
      <Stack direction="column" alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center">
          {Object.entries(colorList ?? {}).map(([key, colorValue]) => {
            const { bg, fg } = colorValue as ColorObject;
            return <div key={key}>{colorBox(bg, fg, key.toUpperCase())}</div>;
          })}
        </Stack>
        {colorList2 && (
          <Stack pt={2} direction="row" spacing={2} alignItems="center">
            {Object.entries(colorList2 ?? {}).map(([key, colorValue]) => {
              const { bg, fg } = colorValue as ColorObject;
              return <div key={key}>{colorBox(bg, fg, key.toUpperCase())}</div>;
            })}
          </Stack>
        )}
        {colorList3 && (
          <Stack pt={2} direction="row" spacing={2} alignItems="center">
            {Object.entries(colorList3 ?? {}).map(([key, colorValue]) => {
              const { bg, fg } = colorValue as ColorObject;
              return <div key={key}>{colorBox(bg, fg, key.toUpperCase())}</div>;
            })}
          </Stack>
        )}
      </Stack>
    </BorderedSection>
  );

  const lightDarkMode = () => {
    return (
      <>
        <Typography variant="body2">Mode:</Typography>
        <OurIconButton
          ariaTitle="light/dark mode"
          onClick={() => themeToggle()}
          icon={
            isDarkTheme ? (
              <DarkModeIcon colorFG={theme.palette.secondary.main} />
            ) : (
              <LightModeIcon colorFG={theme.palette.secondary.main} />
            )
          }
          toolTip={toolTip.mode}
        />
      </>
    );
  };

  const flatten = () => {
    const getFlatten = () =>
      useBrowserStorage
        ? localStorage.getItem('skao_flatten') === 'true'
        : Boolean(storage.flatten);

    const setFlatten = (value: boolean) => {
      if (useBrowserStorage) {
        localStorage.setItem('skao_flatten', String(value));
      } else if (storage.setFlatten) {
        storage.setFlatten(value);
      }
    };

    const flattenToggle = () => {
      const newValue = !getFlatten();
      setFlatten(newValue);
    };

    return (
      <>
        <Typography variant="body2">Flatten:</Typography>

        <Checkbox
          checked={getFlatten()}
          onChange={flattenToggle}
          sx={{
            color: theme.palette.secondary.main,
            '&.Mui-checked': {
              color: theme.palette.secondary.main,
            },
          }}
        />
      </>
    );
  };

  const brandAccent = () => {
    const brandVariantToggle = () => {
      if (!storage?.setButtonVariant) return;

      storage.setButtonVariant(
        storage.buttonVariant === SKABrandColor.Blue ? SKABrandColor.Pink : SKABrandColor.Blue,
      );
    };

    return (
      <>
        <Typography variant="body2">Accent:</Typography>

        <Box
          onClick={brandVariantToggle}
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            cursor: 'pointer',
            bgcolor:
              storage.buttonVariant === SKABrandColor.Blue
                ? logoColors?.['1'].bg
                : logoColors?.['2'].bg,
            border: `2px solid ${theme.palette.text.primary}`,
            transition: 'background-color 0.25s ease, transform 0.15s ease',
            '&:active': {
              transform: 'scale(0.92)',
            },
          }}
        />
      </>
    );
  };

  const accessibilityMode = () => {
    return (
      <>
        <Typography variant="body2">Color:</Typography>

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
      </>
    );
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.default,
      }}
    >
      <Grid container direction="column" sx={{ p: 2 }}>
        <Stack mb={4} direction="row" spacing={2} alignItems="center">
          {lightDarkMode()}
          {flatten()}
          {brandAccent()}
          {accessibilityMode()}
        </Stack>
        <Grid container direction="row" spacing={2} justifyContent="space-between">
          {shouldShowSection('telescope') && section('Telescope colors', telescopeColors)}
          {shouldShowSection('logo') && section('Logo colors', logoColors)}
          {shouldShowSection('button') && section('Button colors', buttonColors)}
        </Grid>
        {shouldShowSection('status') &&
          section('Application Status colors', applicationStatusColors)}
        <Grid container direction="row" spacing={2} justifyContent="space-between">
          {shouldShowSection('observationType') &&
            section('Observation Type colors', observationTypeColors)}
          {shouldShowSection('boolean') && section('Boolean colors', booleanTypeColors)}
        </Grid>
        {shouldShowSection('proposalStatus') &&
          section('Proposal Status colors', proposalStatusColors, proposalStatusColors2)}
        {shouldShowSection('reviewStatus') && section('Review Status colors', reviewStatusColors)}
        {shouldShowSection('status') &&
          section('OSO Status colors', statusColors, statusColors1, statusColors2)}
        {shouldShowSection('chart') && section('Chart colors', chartColors)}
      </Grid>
    </Grid>
  );
}
