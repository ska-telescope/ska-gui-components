import React from 'react';
import ClearIcon from '../Icons/classic/ClearIcon';
import TickIcon from '../Icons/classic/TickIcon';
import { Colors } from '@ska-telescope/ska-javascript-components';
import { PopperPlacementType, Tooltip, useTheme } from '@mui/material';

const DEFAULT_SIZE = 60;
const STROKE_WIDTH = 2;

interface StatusProps {
  ariaDescription?: string;
  ariaTitle?: string;
  children?: React.ReactElement | string;
  icon?: boolean;
  iconOffset?: number;
  iconSizingFactor?: number;
  level?: number;
  softColors?: boolean;
  size?: number;
  testId: string;
  text?: string;
  toolTip?: string;
  toolTipPlacement?: string;
}

function fontSize(value: number) {
  return `${value * 3.5}%`;
}

function iconFontSize(value: number) {
  return `${value * 5.5}%`;
}

function textHeight(value: number) {
  let result = '50%';
  if (value === 2) {
    result = '70%';
  }
  if (value === 3) {
    result = '35%';
  }
  return result;
}

function iconTextHeight(value: number) {
  let result = '50%';
  if (value === 2) {
    result = '60%';
  }
  if (value === 3) {
    result = '40%';
  }
  return result;
}

function points(level: number, size: number) {
  const half = (size / 2).toString();
  const full = (size - STROKE_WIDTH).toString();
  switch (level) {
    case 2:
      return `${half} ${STROKE_WIDTH},${full} ${full}, ${STROKE_WIDTH} ${full}, ${half} ${STROKE_WIDTH}`;
    case 3:
      return `${STROKE_WIDTH} ${STROKE_WIDTH}, ${full} ${STROKE_WIDTH}, ${half} ${full}, ${STROKE_WIDTH} ${STROKE_WIDTH}`;
    default:
      return `${half} ${STROKE_WIDTH},${full} ${half}, ${half} ${full}, ${STROKE_WIDTH} ${half}, ${half} ${STROKE_WIDTH}`;
  }
}

const theSize = (size: number | undefined) => size ?? DEFAULT_SIZE;

export function StatusIcon({
  ariaDescription = 'Various shapes and colours to indicate the status',
  ariaTitle = 'Status Indicator',
  children,
  icon = false,
  iconOffset = 0,
  iconSizingFactor = 0.6,
  level = 9,
  softColors = false,
  size = DEFAULT_SIZE,
  testId,
  text = '',
  toolTip = '',
  toolTipPlacement = 'bottom',
}: StatusProps) {
  const componentClassNames = ['svg-content'];
  const theme = useTheme();
  const colors = Colors();

  const DEF_TITLE = 'Status Indicator' + ' ' + level;
  const setAriaLabel = ariaTitle.length > 0 ? ariaTitle : DEF_TITLE;
  const setAriaDesc =
    ariaTitle.length > 0 ? ariaTitle + ariaDescription : DEF_TITLE + ' ' + ariaDescription;

  function showText(level: number, size: number, text: string, soft: boolean) {
    return (
      <text
        x="50%"
        y={textHeight(level)}
        alignmentBaseline="central"
        dominantBaseline="central"
        fontSize={fontSize(theSize(size))}
        textAnchor="middle"
        textLength={theSize(size) / 2}
        lengthAdjust="spacingAndGlyphs"
        fill={textColor(level, soft)}
      >
        {text}
      </text>
    );
  }

  function showIcon(
    level: number,
    size: number,
    soft: boolean,
    iconSizingFactor: number,
    iconOffset: number,
  ) {
    const iconSize = size * iconSizingFactor;
    const textSize = size * 0.7;
    const offset = (iconOffset > 0 ? iconOffset : size - iconSize - 1) / 2;

    return (
      <>
        {level === 0 && (
          <foreignObject x={offset} y={offset} width={iconSize} height={iconSize}>
            <TickIcon colorFG={'#FFFFFF'} size={iconSize} />
          </foreignObject>
        )}
        {level === 1 && (
          <foreignObject x={offset} y={offset} width={iconSize} height={iconSize}>
            <ClearIcon colorFG={'#FFFFFF'} size={iconSize} />
          </foreignObject>
        )}
        {level === 2 && showIconText(level, textSize, '!', soft)}
        {level === 3 && showIconText(level, textSize, '?', soft)}
        {level === 4 && showIconText(level, textSize, 'i', soft)}
      </>
    );
  }

  function showIconText(level: number, size: number, text: string, soft: boolean) {
    return (
      <text
        aria-describedby={text}
        x="50%"
        y={iconTextHeight(level)}
        alignmentBaseline="central"
        dominantBaseline="central"
        fontSize={level === 3 ? '16px' : iconFontSize(size ? size : DEFAULT_SIZE)}
        fontWeight={'bold'}
        textAnchor="middle"
        textLength={size ? size / 3 : DEFAULT_SIZE}
        lengthAdjust="spacingAndGlyphs"
        fill={textColor(level, soft)}
      >
        {text}
      </text>
    );
  }

  function fillColor(level: number, soft: boolean) {
    switch (level) {
      case 0:
        return soft ? theme.palette.success.light : theme.palette.success.main;
      case 1:
        return soft ? theme.palette.error.light : theme.palette.error.main;
      case 2:
        return soft ? colors.SOFT_ERROR_2[1] : colors.ERROR_2[1];
      case 3:
        return soft ? theme.palette.warning.light : theme.palette.warning.main;
      case 4:
        return soft ? theme.palette.info.light : theme.palette.info.main;
      default:
        return soft ? theme.palette.primary.light : theme.palette.primary.main;
    }
  }

  function textColor(level: number, soft: boolean) {
    switch (level) {
      case 0:
        return soft ? theme.palette.success.contrastText : theme.palette.success.contrastText;
      case 1:
        return soft ? theme.palette.error.contrastText : theme.palette.error.contrastText;
      case 2:
        return soft ? colors.SOFT_ERROR_2[4] : colors.ERROR_2[4];
      case 3:
        return soft ? theme.palette.warning.contrastText : theme.palette.warning.contrastText;
      case 4:
        return soft ? theme.palette.info.contrastText : theme.palette.info.contrastText;
      default:
        return soft ? theme.palette.primary.contrastText : theme.palette.primary.contrastText;
    }
  }

  const strokeProps = { stroke: fillColor(level, softColors), strokeWidth: STROKE_WIDTH };

  return (
    <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
      <svg
        aria-label={setAriaLabel}
        aria-describedby={setAriaDesc}
        data-testid={testId}
        className={componentClassNames.join(' ')}
        preserveAspectRatio="xMinYMin meet"
        role="img"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {(!level || level < 0 || level > 5) && (
          <g>
            <path d="" transform="translate(-45 -15)" role="presentation" />
          </g>
        )}
        {level === 1 && (
          <rect
            aria-describedby={setAriaLabel}
            role="img"
            x={STROKE_WIDTH}
            y={STROKE_WIDTH}
            width={(size ? size : DEFAULT_SIZE) - STROKE_WIDTH * 2}
            height={(size ? size : DEFAULT_SIZE) - STROKE_WIDTH * 2}
            fill={fillColor(level, softColors)}
            {...strokeProps}
          />
        )}
        {(level === 2 || level === 3 || level === 4) && (
          <polyline
            aria-describedby={setAriaLabel}
            role="img"
            points={points(level, size ? size : DEFAULT_SIZE)}
            fill={fillColor(level, softColors)}
            {...strokeProps}
          />
        )}
        {(level === 0 || level === 5) && (
          <circle
            aria-describedby={setAriaLabel}
            role="img"
            cx={size ? size / 2 : DEFAULT_SIZE}
            cy={size ? size / 2 : DEFAULT_SIZE}
            r={size ? (size - STROKE_WIDTH) / 2 : DEFAULT_SIZE - STROKE_WIDTH}
            fill={fillColor(level, softColors)}
            {...strokeProps}
          />
        )}
        {icon && showIcon(level, size, softColors, iconSizingFactor, iconOffset)}
        {!icon && text && showText(level, size, text, softColors)}
        {children}
      </svg>
    </Tooltip>
  );
}

export default StatusIcon;
