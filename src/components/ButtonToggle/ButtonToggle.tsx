import React, { JSX } from 'react';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';

export interface ButtonToggleProps {
  ariaDescription?: string;
  ariaTitle?: string;
  current: string;
  disabled?: boolean;
  options: { id: string; label: string; value: any }[];
  setValue?: Function;
  testId: string;
  toolTip?: string;
  value: any;
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
}: ButtonToggleProps): JSX.Element {
  const fetchValue = (id: string) => {
    return options[options[0].id === id ? 0 : 1].value;
  };

  const updateValue = (e: any, id: string) =>
    typeof setValue !== 'undefined' ? setValue(e, fetchValue(id)) : null;

  return (
    <Tooltip title={toolTip} arrow>
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
        {options.map((option: { id: string; label: string; value: any }): JSX.Element => {
          return (
            <ToggleButton
              aria-label={option.id}
              id={option.id}
              data-testid={testId + option.id}
              key={option.id}
              selected={option.id === current}
              sx={{
                '&.Mui-selected': {
                  color: 'primary.main',
                  backgroundColor: 'secondary.main',
                  fontWeight: 'bold',
                  ':disabled': {
                    color: 'primary.contrastText',
                    backgroundColor: 'primary.dark',
                  },
                },
                '&.Mui-focusVisible': {
                  color: 'primary.main',
                  backgroundColor: 'secondary.dark',
                },
                ':hover': {
                  color: 'primary.main',
                  backgroundColor: 'secondary.dark',
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
