import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export interface FrequencySpectrumProps {
  minFreq: number;
  maxFreq: number;
  centerFreq: number;
  bandWidth: number;
  minEdge?: number;
  maxEdge?: number;
  unit?: string;
  bandColor?: string;
  bandColorContrast?: string;
  boxWidth?: string;

  actual?: boolean; // NEW
}

export const FrequencySpectrum: React.FC<FrequencySpectrumProps> = ({
  minFreq,
  maxFreq,
  centerFreq,
  bandWidth,
  minEdge = minFreq,
  maxEdge = maxFreq,
  unit = 'MHz',
  bandColor = '',
  bandColorContrast = '',
  boxWidth = '400px',

  actual = false, // NEW default
}) => {
  const theme = useTheme();
  const totalWidth = maxFreq - minFreq;

  // Actual min/max
  const actualMin = Number((centerFreq - bandWidth / 2).toFixed(2));
  const actualMax = Number((centerFreq + bandWidth / 2).toFixed(2));

  // Normal-mode geometry
  const bandStartFreq = centerFreq - bandWidth / 2;
  const bandEndFreq = centerFreq + bandWidth / 2;

  const bandOffsetPercent = ((bandStartFreq - minFreq) / totalWidth) * 100;
  const bandPercent = (bandWidth / totalWidth) * 100;
  const centerPercent = ((centerFreq - minFreq) / totalWidth) * 100;
  const minEdgePercent = ((minEdge - minFreq) / totalWidth) * 100;
  const maxEdgePercent = ((maxEdge - minFreq) / totalWidth) * 100;

  // Determine band color
  let usedColor = bandColor === '' ? theme.palette.primary.light : bandColor;
  let usedColorContrast =
    bandColorContrast === '' ? theme.palette.primary.contrastText : bandColorContrast;

  if (bandStartFreq < minFreq || bandEndFreq > maxFreq) {
    usedColor = theme.palette.error.main;
    usedColorContrast = theme.palette.error.contrastText;
  } else if (bandStartFreq < minEdge || bandEndFreq > maxEdge) {
    usedColor = theme.palette.warning.main;
    usedColorContrast = theme.palette.error.contrastText;
  }

  // Label width measurement (only used when actual === false)
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    if (!actual && labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, [centerFreq, unit, actual]);

  // --- ACTUAL MODE OVERRIDES ---
  // In actual mode, the band fills the entire bar
  const displayOffset = actual ? 0 : bandOffsetPercent;
  const displayWidth = actual ? 100 : bandPercent;

  return (
    <Box sx={{ width: boxWidth, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        {/* Min Frequency */}
        <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
          {actual ? `${actualMin} ${unit}` : `${minFreq} ${unit}`}
        </Typography>

        {/* Wrapper for label + bar */}
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
          {/* CENTRAL LABEL ABOVE BAR (only when NOT actual) */}
          {!actual && (
            <Typography
              ref={labelRef}
              variant="caption"
              sx={{
                position: 'absolute',
                bottom: '100%',
                marginBottom: '4px',
                whiteSpace: 'nowrap',
                color: usedColorContrast,
                left: `calc(${centerPercent}% - ${labelWidth / 2}px)`,
              }}
            >
              {centerFreq} {unit}
            </Typography>
          )}

          {/* Spectrum Bar */}
          <Box
            sx={{
              position: 'relative',
              height: 48,
              backgroundColor: theme.palette.divider,
              overflow: 'hidden',
              borderTopLeftRadius: minEdge !== minFreq ? 24 : 0,
              borderBottomLeftRadius: minEdge !== minFreq ? 24 : 0,
              borderTopRightRadius: maxEdge !== maxFreq ? 24 : 0,
              borderBottomRightRadius: maxEdge !== maxFreq ? 24 : 0,
            }}
          >
            {/* Highlighted Band */}
            <Box
              data-testid="frequencySpectrum-highlighted-band"
              sx={{
                position: 'absolute',
                left: `${displayOffset}%`,
                width: `${displayWidth}%`,
                height: '100%',
                backgroundColor: usedColor,
              }}
            />

            {/* CENTRAL MARKER (only when NOT actual) */}
            {!actual && (
              <Box
                sx={{
                  position: 'absolute',
                  left: `${centerPercent}%`,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  backgroundColor: usedColorContrast,
                  transform: 'translateX(-1px)',
                }}
              />
            )}

            {/* EDGE MARKERS (only when NOT actual) */}
            {!actual && minEdge !== minFreq && (
              <Box
                sx={{
                  position: 'absolute',
                  left: `${minEdgePercent}%`,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  backgroundColor: theme.palette.warning.light,
                  transform: 'translateX(-1px)',
                }}
              />
            )}

            {!actual && maxEdge !== maxFreq && (
              <Box
                sx={{
                  position: 'absolute',
                  left: `${maxEdgePercent}%`,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  backgroundColor: theme.palette.warning.light,
                  transform: 'translateX(-1px)',
                }}
              />
            )}

            {/* CENTRAL VALUE BOX (only when actual === true) */}
            {actual && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  left: `${centerPercent}%`,
                  backgroundColor: 'transparent',
                  color: usedColorContrast,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {centerFreq} {unit}
              </Box>
            )}
          </Box>
        </Box>

        {/* Max Frequency */}
        <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
          {actual ? `${actualMax} ${unit}` : `${maxFreq} ${unit}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default FrequencySpectrum;
