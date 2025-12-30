import React, { JSX } from 'react';
import { ButtonToggle } from '../ButtonToggle/ButtonToggle';
import { TelescopeList } from '@ska-telescope/ska-javascript-components';

export type Telescope = {
  code: string;
  name: string;
  location: string;
  position: {
    lat: number;
    lon: number;
  };
  image: string;
};

export interface TelescopeSelectorProps {
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  reversed?: boolean;
  telescope: Telescope;
  toolTip?: string;
  toolTipPlacement?: string;
  updateTelescope: Function;
}

export function TelescopeSelector({
  ariaDescription = 'Means of selecting one of the available telescopes',
  ariaTitle = 'TelescopeSelector',
  disabled = false,
  reversed = false,
  telescope,
  toolTip = '',
  toolTipPlacement = 'bottom',
  updateTelescope,
}: TelescopeSelectorProps): JSX.Element {
  const telescopeChange = (_event: React.MouseEvent<HTMLElement>, newTelescope: Telescope) => {
    if (newTelescope) {
      updateTelescope(newTelescope);
    }
  };

  const getOptions = (inList: any) => {
    const results: { id: string; label: string; value: any }[] = [];
    inList.forEach((el: Telescope): void => {
      if (reversed) {
        results.unshift({ id: el.code, label: el.name, value: el });
      } else {
        results.push({ id: el.code, label: el.name, value: el });
      }
    });
    return results;
  };

  return (
    <ButtonToggle
      ariaDescription={ariaDescription}
      ariaTitle={ariaTitle}
      color="telescope"
      current={telescope.code}
      disabled={disabled}
      options={getOptions(TelescopeList)}
      setValue={telescopeChange}
      testId="telescopeSelectorId"
      toolTip={toolTip}
      toolTipPlacement={toolTipPlacement}
      value={telescope}
    />
  );
}

export default TelescopeSelector;
