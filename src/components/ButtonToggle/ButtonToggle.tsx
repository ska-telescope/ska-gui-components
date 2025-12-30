import React, { JSX } from 'react';
import { PopperPlacementType, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { getColors } from '../../utils/getColors/getColors';

export interface ButtonToggleProps {
  ariaDescription?: string;
  ariaTitle?: string;
  current: string;
  disabled?: boolean;
  options: { id: string; label: string; value: any }[];
  setValue?: Function;
  testId: string;
  toolTip?: string;
  toolTipPlacement?: string;
  value: any;

  /** NEW: optional palette type */
  color?: string; // e.g. "telescope", "boolean", "chart"
}

export function ButtonToggle({
  ariaDescription = 'button',
  ariaTitle = 'ButtonToggle',
  current,
  disabled = false,
  setValue,
  value,
  options,
  testId,
  toolTip = '',
  toolTipPlacement = 'bottom',
  color = '', // NEW default
}: ButtonToggleProps): JSX.Element {
  const fetchValue = (id: string) => {
    return options[options[0].id === id ? 0 : 1].value;
  };

  const updateValue = (e: any, id: string) =>
    typeof setValue !== 'undefined' ? setValue(e, fetchValue(id)) : null;

  return (
    <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
      <ToggleButtonGroup
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        aria-hidden={false}
        color="secondary"
        data-testid={testId}
        disabled={disabled}
        exclusive
        onChange={updateValue}
        size="small"
        value={value}
      >
        {options.map((option) => {
          // If color type is provided, fetch bg/fg for this option
          const colorPair = color
            ? getColors({
                type: color, // <-- palette type
                colors: option.id, // <-- key for this button
                content: 'both',
                asArray: false,
              })?.[option.id]
            : undefined;

          const selectedBG = colorPair?.bg;
          const selectedFG = colorPair?.fg;

          return (
            <ToggleButton
              aria-label={option.id}
              id={option.id}
              data-testid={testId + option.id}
              key={option.id}
              selected={option.id === current}
              sx={{
                '&.Mui-selected': {
                  color: selectedFG ?? 'primary.main',
                  backgroundColor: selectedBG ?? 'secondary.main',
                  fontWeight: 'bold',
                  ':disabled': {
                    color: 'primary.contrastText',
                    backgroundColor: 'primary.dark',
                  },
                },
                '&.Mui-focusVisible': {
                  color: selectedFG ?? 'primary.main',
                  backgroundColor: selectedBG ?? 'secondary.dark',
                },
                ':hover': {
                  color: selectedFG ?? 'primary.main',
                  backgroundColor: selectedBG ?? 'secondary.dark',
                },
              }}
              value={option.id}
            >
              {option.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Tooltip>
  );
}

export default ButtonToggle;
