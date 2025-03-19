import React, { JSX, ReactNode } from 'react';
import { Box, Card, CardContent, CardHeader, Modal, useTheme } from '@mui/material';
import ClearIcon from '../Icons/circle/ClearIcon';
import { OurIconButton } from '../IconButton/IconButton';

export type Help = {
  content: Object;
  component: Object;
  showHelp: Boolean;
};
export interface HelpModalProps {
  ariaDescription?: string;
  component?: boolean;
  help: Help;
  helpToggle: Function;
  toolTip?: string;
}

export function HelpModal({
  ariaDescription = 'Help Modal',
  component = false,
  help,
  helpToggle,
  toolTip = 'Help close button',
}: HelpModalProps): JSX.Element {
  function closeModal() {
    helpToggle();
  }

  return (
    <Modal open={true}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card variant="outlined" sx={{ height: '90vh', width: '90vw' }}>
          <CardHeader
            action={
              <OurIconButton
                ariaDescription={ariaDescription}
                icon={<ClearIcon colorFG={useTheme().palette.secondary.main} />}
                onClick={() => closeModal()}
                testId={'closeHelpModalBtn'}
                toolTip={toolTip}
              />
            }
          />
          <CardContent sx={{ height: '90vh', width: '90vw' }}>
            {component ? (help.component as ReactNode) : (help.content as ReactNode)}
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default HelpModal;
