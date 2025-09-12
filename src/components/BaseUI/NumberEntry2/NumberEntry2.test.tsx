import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import NumberEntry2 from './NumberEntry2';
import '@testing-library/jest-dom';
import { LABEL_POSITION } from '../../EntryField/EntryField';

describe('NumberEntry2', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <NumberEntry2
        disabled={false}
        prompt="HELPER TEXT"
        title="LABEL"
        width={200}
        fieldName={''}
        setValue={() => {}}
        toolTip="TOOLTIP"
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        errorText=""
        // helperText="HELPER TEXT"
        // label="LABEL"
        // labelPosition={LABEL_POSITION.CONTAINED}
        // labelWidth={4}
        // onFocus={undefined}
        required={false}
        testId="testId"
        value={0}
        minValue={0}
        maxValue={100}
      />,
    );
  });
});
