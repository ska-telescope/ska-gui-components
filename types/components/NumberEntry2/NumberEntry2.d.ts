import React from 'react';
interface NumberEntry2Props {
  disabled?: boolean;
  fieldHeight?: number;
  fieldName: string;
  prompt?: string;
  maxValue?: number;
  minValue?: number;
  required?: boolean;
  setValue: Function;
  step?: number;
  suffix?: any;
  testId?: string;
  title?: string | JSX.Element;
  toolTip?: string;
  value: number | undefined;
  width?: number;
}
export declare function NumberEntry2({
  disabled,
  fieldHeight,
  fieldName,
  maxValue,
  minValue,
  prompt,
  required,
  setValue,
  step,
  suffix,
  title,
  testId,
  toolTip,
  value,
  width,
}: NumberEntry2Props): React.JSX.Element;
export default NumberEntry2;
