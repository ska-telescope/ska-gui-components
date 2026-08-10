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
  displayBoundaryInUnits?: number;
  bandColor?: string;
  bandColorContrast?: string;
  boxWidth?: string;
  actual?: boolean;
}

export const FrequencySpectrum: React.FC<FrequencySpectrumProps> = ({
  minFreq,
  maxFreq,
  centerFreq,
  bandWidth,
  minEdge = minFreq,
  maxEdge = maxFreq,
  unit = 'MHz',
  displayBoundaryInUnits = 5,
  bandColor = '',
  bandColorContrast = '',
  boxWidth = '400px',
  actual = false,
}) => {
  const theme = useTheme();

  const bandStartFreq = centerFreq - bandWidth / 2;
  const bandEndFreq = centerFreq + bandWidth / 2;

  // Define the edges of the display - this adds padding to the given min/max frequencies
  const displayBorderMin = actual
    ? Number(bandStartFreq.toFixed(2))
    : Number(minFreq.toFixed()) - displayBoundaryInUnits;
  const displayBorderMax = actual
    ? Number(bandEndFreq.toFixed(2))
    : Number(maxFreq.toFixed()) + displayBoundaryInUnits;
  const totalWidth = displayBorderMax - displayBorderMin;

  // Display bounds for min and max of band
  const displayGeometryMin = Number(minFreq.toFixed(2));
  const displayGeometryMax = Number(maxFreq.toFixed(2));

  const bandPercent = (bandWidth / totalWidth) * 100;
  const centerPercent = ((centerFreq - displayBorderMin) / totalWidth) * 100;
  const minFreqPercent = ((displayGeometryMin - displayBorderMin) / totalWidth) * 100;
  const maxFreqPercent = ((displayGeometryMax - displayBorderMin) / totalWidth) * 100;
  const minEdgePercent = ((minEdge - displayBorderMin) / totalWidth) * 100;
  const maxEdgePercent = ((maxEdge - displayBorderMin) / totalWidth) * 100;

  // Determine band color
  let usedColor = bandColor === '' ? theme.palette.primary.light : bandColor;
  let usedColorContrast =
    bandColorContrast === '' ? theme.palette.primary.contrastText : bandColorContrast;

  // Apply a tolerance to the boundary checks, so that a value that's genuinely exactly at the
  // boundary (but which may differ from min/max by a fraction of a Hz due to rounding/fp
  // arithmetic) isn't flagged as a breach.
  const BOUNDARY_TOLERANCE = 1 / (unit === 'GHz' ? 1e9 : 1e6);
  if (bandStartFreq < minFreq - BOUNDARY_TOLERANCE || bandEndFreq > maxFreq + BOUNDARY_TOLERANCE) {
    usedColor = theme.palette.error.main;
    usedColorContrast = theme.palette.error.contrastText;
  } else if (
    bandStartFreq < minEdge - BOUNDARY_TOLERANCE ||
    bandEndFreq > maxEdge + BOUNDARY_TOLERANCE
  ) {
    usedColor = theme.palette.warning.light;
    usedColorContrast = theme.palette.error.contrastText;
  }

  // Label width measurement (only used when actual === false)
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const minFreqLabelRef = React.useRef<HTMLSpanElement>(null);
  const [minFreqLabelWidth, setMinFreqLabelWidth] = React.useState(0);
  const maxFreqLabelRef = React.useRef<HTMLSpanElement>(null);
  const [maxFreqLabelWidth, setMaxFreqLabelWidth] = React.useState(0);
  const minEdgeLabelRef = React.useRef<HTMLSpanElement>(null);
  const maxEdgeLabelRef = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    if (!actual) {
      if (labelRef.current) setLabelWidth(labelRef.current.offsetWidth);
      if (minFreqLabelRef.current) setMinFreqLabelWidth(minFreqLabelRef.current.offsetWidth);
      if (maxFreqLabelRef.current) setMaxFreqLabelWidth(maxFreqLabelRef.current.offsetWidth);
    }
  }, [centerFreq, minFreq, maxFreq, unit, actual]);

  // --- ACTUAL MODE OVERRIDES ---
  // In actual mode, the band fills the entire bar
  const displayOffset = actual ? 0 : centerPercent;
  const displayWidth = actual ? 100 : bandPercent;

  return (
    <Box sx={{ width: boxWidth, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
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

          {/* ACTUAL FREQUENCY EDGE LABELS BELOW BAR (only when NOT actual) */}
          {!actual && (
            <Typography
              ref={minFreqLabelRef}
              variant="caption"
              sx={{
                position: 'absolute',
                top: '100%',
                marginTop: '4px',
                whiteSpace: 'nowrap',
                color: theme.palette.text.secondary,
                left: `calc(${minFreqPercent}% - ${minFreqLabelWidth / 2}px)`,
              }}
            >
              {displayGeometryMin} {unit}
            </Typography>
          )}

          {!actual && (
            <Typography
              ref={maxFreqLabelRef}
              variant="caption"
              sx={{
                position: 'absolute',
                top: '100%',
                marginTop: '4px',
                whiteSpace: 'nowrap',
                color: theme.palette.text.secondary,
                left: `calc(${maxFreqPercent}% - ${maxFreqLabelWidth / 2}px)`,
              }}
            >
              {displayGeometryMax} {unit}
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
                minWidth: '3px',
                transform: actual ? 'none' : 'translateX(-50%)',
              }}
            />

            {/* CENTRAL MARKER (only when NOT actual) */}
            {!actual && (
              <Box
                data-testid="frequencySpectrum-center-marker"
                sx={{
                  position: 'absolute',
                  left: `${centerPercent}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: 'black',
                  transform: 'translateX(-0.5px)',
                }}
              />
            )}

            {/* Actual frequency edge markers (not just display edges) */}
            {!actual && (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${minFreqPercent}%`,
                    backgroundColor: theme.palette.divider,
                    transform: 'translateX(-1px)',
                  }}
                />
                <Typography
                  ref={minEdgeLabelRef}
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: '100%',
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    color: usedColorContrast,
                    left: `${minFreqPercent}%`,
                  }}
                >
                  {displayGeometryMin} {unit}
                </Typography>
              </>
            )}

            {!actual && (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: `${100 - maxFreqPercent}%`,
                    backgroundColor: theme.palette.divider,
                    transform: 'translateX(-1px)',
                  }}
                />
                <Typography
                  ref={maxEdgeLabelRef}
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: '100%',
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    color: usedColorContrast,
                    right: `${100 - maxFreqPercent}%`,
                  }}
                >
                  {displayGeometryMax} {unit}
                </Typography>
              </>
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
      </Box>
    </Box>
  );
};

export default FrequencySpectrum;
