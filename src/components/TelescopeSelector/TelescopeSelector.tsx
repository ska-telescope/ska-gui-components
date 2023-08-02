import React from 'react';
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
  // required
  current: string;
  setValue?: Function;
  testId: string;
  value: any;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  toolTip?: string;
}

export function TelescopeSelector({
  ariaDescription,
  ariaTitle,
  disabled,
  setValue,
  toolTip,
  value,
}: TelescopeSelectorProps): JSX.Element {
  const telescopeChange = (_event: React.MouseEvent<HTMLElement>, newTelescope: Telescope) => {
    if (setValue && newTelescope) {
      setValue(newTelescope);
    }
  };

  const getOptions = (inList: any) => {
    const results: { id: string; label: string; value: any }[] = [];
    inList.forEach((el: Telescope): void => {
      results.push({ id: el.code, label: el.name, value: el });
    });
    return results;
  };

  return (
    <ButtonToggle
      ariaDescription={ariaDescription}
      ariaTitle={ariaTitle}
      current={value.code}
      disabled={disabled}
      options={getOptions(TelescopeList)}
      setValue={telescopeChange}
      testId="telescopeSelectorId"
      toolTip={toolTip}
      value={value}
    />
  );
}

TelescopeSelector.defaultProps = {
  ariaDescription: 'Means of selecting one of the available telescopes',
  ariaTitle: 'TelescopeSelector',
  disabled: false,
  toolTip: '',
};

export default TelescopeSelector;
