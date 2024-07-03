import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { Colors } from '@ska-telescope/ska-javascript-components';

const DEFAULT_SIZE = 60;
const STROKE_WIDTH = 2;

interface StatusProps {
  ariaDescription?: string;
  ariaTitle?: string;

  children?: React.ReactElement | string;
  icon?: boolean;
  level?: number;
  size?: number;
  testId: string;
  text?: string;
}

function fontSize(value: number) {
  return `${value * 3.5}%`;
}

function iconFontSize(value: number) {
  return `${value * 5.5}%`;
}

function getColor(level: number, col: number) {
  switch (level) {
    case 0:
      return Colors().SUCCESS[col];
    case 1:
      return Colors().ERROR_1[col];
    case 2:
      return Colors().ERROR_2[col];
    case 3:
      return Colors().ERROR_3[col];
    case 4:
      return Colors().ERROR_4[col];
    default:
      return Colors().DARK_PRIMARY_CONTRAST;
  }
}

function fillColor(value: number) {
  return getColor(value, 1);
}

function textColor(value: number) {
  return getColor(value, 4);
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

function showIconText(level: number, size: number, text: string) {
  return (
    <text
      aria-describedby={text}
      x="50%"
      y={iconTextHeight(level)}
      alignmentBaseline="central"
      dominantBaseline="central"
      fontSize={iconFontSize(size ? size : DEFAULT_SIZE)}
      textAnchor="middle"
      textLength={size ? size / 3 : DEFAULT_SIZE}
      lengthAdjust="spacingAndGlyphs"
      fill={textColor(level)}
    >
      {text}
    </text>
  );
}

function showIcon(level: number, size: number) {
  return (
    <>
      {level === 0 && <DoneIcon sx={{ color: 'white' }} />}
      {level === 1 && <ClearIcon sx={{ color: 'white' }} />}
      {level === 2 && showIconText(level, size, '!')}
      {level === 3 && showIconText(level, size * 0.7, '?')}
      {level === 4 && showIconText(level, size, 'i')}
    </>
  );
}

function showText(level: number, size: number, text: string) {
  return (
    <text
      aria-describedby={text}
      x="50%"
      y={textHeight(typeof level === 'number' ? level : 9)}
      alignmentBaseline="central"
      dominantBaseline="central"
      fontSize={fontSize(size ? size : DEFAULT_SIZE)}
      textAnchor="middle"
      textLength={size ? size / 2 : DEFAULT_SIZE}
      lengthAdjust="spacingAndGlyphs"
      fill={textColor(typeof level === 'number' ? level : 9)}
    >
      {text}
    </text>
  );
}

export function StatusIcon({
  ariaDescription = 'Various shapes and colours to indicate the status',
  ariaTitle = 'Status Indicator',
  children,
  icon = false,
  level = 9,
  size = DEFAULT_SIZE,
  testId,
  text = '',
}: StatusProps) {
  const componentClassNames = ['svg-content'];

  const DEF_TITLE = 'Status Indicator' + ' ' + level;
  const setAriaLabel = ariaTitle.length > 0 ? ariaTitle : DEF_TITLE;
  const setAriaDesc =
    ariaTitle.length > 0 ? ariaTitle + ariaDescription : DEF_TITLE + ' ' + ariaDescription;

  return (
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
      <title id="svg-title">{setAriaLabel}</title>
      <desc id="svg-description">{setAriaDesc}</desc>
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
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {(level === 2 || level === 3 || level === 4) && (
        <polyline
          aria-describedby={setAriaLabel}
          role="img"
          points={points(level, size ? size : DEFAULT_SIZE)}
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {(level === 0 || level === 5) && (
        <circle
          aria-describedby={setAriaLabel}
          role="img"
          cx={size ? size / 2 : DEFAULT_SIZE}
          cy={size ? size / 2 : DEFAULT_SIZE}
          r={size ? (size - STROKE_WIDTH) / 2 : DEFAULT_SIZE - STROKE_WIDTH}
          stroke="black"
          fill={fillColor(level)}
          strokeWidth={STROKE_WIDTH}
        />
      )}
      {icon && showIcon(level, size)}
      {!icon && text && showText(level, size, text)}
      {children}
    </svg>
  );
}

export default StatusIcon;
