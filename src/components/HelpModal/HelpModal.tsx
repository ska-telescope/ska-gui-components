import React from 'react';
import { Box, Card, CardContent, CardHeader, IconButton, Modal } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export type Help = {
  content: Object;
  component: Object;
  showHelp: Boolean;
};
export interface HelpModalProps {
  component?: boolean;
  help: Help;
  helpToggle: Function;
}

export function HelpModal({ component = false, help, helpToggle }: HelpModalProps): JSX.Element {
  function closeModal() {
    helpToggle();
  }

  return (
    <Modal open={true}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card variant="outlined" sx={{ height: '90vh', width: '90vw' }}>
          <CardHeader
            action={
              <IconButton
                aria-label="DUMMY"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                onClick={() => closeModal()}
                color="inherit"
                data-testid="closeHelpModalBtn"
              >
                <HighlightOffIcon />
              </IconButton>
            }
          />
          <CardContent sx={{ height: '90vh', width: '90vw' }}>
            {component ? help.component : help.content}
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default HelpModal;
