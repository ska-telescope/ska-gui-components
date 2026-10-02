import * as React from 'react';
import {
  ERROR_1,
  ERROR_2,
  ERROR_3,
  ERROR_4,
  ERROR_5,
  SUCCESS,
  SOFT_ERROR_1,
  SOFT_ERROR_2,
  SOFT_ERROR_3,
  SOFT_ERROR_4,
  SOFT_ERROR_5,
  SOFT_SUCCESS,
} from './statusColors';

const DEFAULT_SIZE = 60;
const STROKE_WIDTH = 2;

interface StatusProps {
  ariaDescription?: string;
  ariaTitle?: string;
  children?: React.ReactElement | string;
  level?: number;
  noBorder?: boolean;
  softColors?: boolean;
  size?: number;
  testId: string;
  text?: string;
}

function fontSize(value: number) {
  return `${value * 3.5}%`;
}

function getColor(level: number, col: number, soft: boolean) {
  switch (level) {
    case 0:
      return soft ? SOFT_SUCCESS[col] : SUCCESS[col];
    case 1:
      return soft ? SOFT_ERROR_1[col] : ERROR_1[col];
    case 2:
      return soft ? SOFT_ERROR_2[col] : ERROR_2[col];
    case 3:
      return soft ? SOFT_ERROR_3[col] : ERROR_3[col];
    case 4:
      return soft ? SOFT_ERROR_4[col] : ERROR_4[col];
    default:
      return soft ? SOFT_ERROR_5[col] : ERROR_5[col];
  }
}

function fillColor(level: number, soft: boolean) {
  return getColor(level, 1, soft);
}

function textColor(level: number, soft: boolean) {
  return getColor(level, 4, soft);
}

function textHeight(level: number) {
  if (level === 2) return '62%';
  if (level === 3) return '30%';
  return '50%';
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

export function Status({
  ariaDescription = 'Various shapes and colours to indicate the status',
  ariaTitle = '',
  children,
  level = 9,
  noBorder = false,
  softColors = false,
  size = DEFAULT_SIZE,
  testId,
  text = '',
}: StatusProps) {
  const componentClassNames = ['svg-content'];
  const uniqueId = `status-${testId}`;
  const safeLevel = Math.max(0, Math.min(level ?? 9, 5));

  const DEF_TITLE = `Status Indicator ${safeLevel}`;
  const setAriaLabel = ariaTitle.length > 0 ? ariaTitle : DEF_TITLE;
  const setAriaDesc =
    ariaTitle.length > 0 ? `${ariaTitle} ${ariaDescription}` : `${DEF_TITLE} ${ariaDescription}`;

  const strokeProps = noBorder
    ? { stroke: 'none', strokeWidth: 0 }
    : { stroke: 'black', strokeWidth: STROKE_WIDTH };

  return (
    <svg
      aria-labelledby={`${uniqueId}-title`}
      aria-describedby={`${uniqueId}-desc`}
      data-testid={testId}
      className={componentClassNames.join(' ')}
      preserveAspectRatio="xMinYMin meet"
      role="img"
      height={size}
      width={size}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={`${uniqueId}-title`}>{setAriaLabel}</title>
      <desc id={`${uniqueId}-desc`}>{setAriaDesc}</desc>

      {safeLevel === 1 && (
        <rect
          x={STROKE_WIDTH}
          y={STROKE_WIDTH}
          width={theSize(size) - STROKE_WIDTH * 2}
          height={theSize(size) - STROKE_WIDTH * 2}
          fill={fillColor(safeLevel, softColors)}
          {...strokeProps}
        />
      )}

      {(safeLevel === 2 || safeLevel === 3 || safeLevel === 4) && (
        <polyline
          points={points(safeLevel, theSize(size))}
          fill={fillColor(safeLevel, softColors)}
          {...strokeProps}
        />
      )}

      {(safeLevel === 0 || safeLevel === 5) && (
        <circle
          cx={theSize(size) / 2}
          cy={theSize(size) / 2}
          r={(theSize(size) - STROKE_WIDTH) / 2}
          fill={fillColor(safeLevel, softColors)}
          {...strokeProps}
        />
      )}

      {text && showText(safeLevel, size, text, softColors)}
      {children}
    </svg>
  );
}
