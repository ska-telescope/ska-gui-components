import React from 'react';
import { Backdrop } from '@mui/material';

export interface SKAOBackdropProps {
  children?: React.JSX.Element;
  open: boolean;
  visible?: boolean;
}

export function SKAOBackdrop({
  children,
  open,
  visible = true,
}: SKAOBackdropProps): React.JSX.Element {
  return (
    <Backdrop
      sx={{
        color: 'white',
        zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
      }}
      open={open}
      invisible={!visible}
    >
      {children}
    </Backdrop>
  );
}

export default SKAOBackdrop;
