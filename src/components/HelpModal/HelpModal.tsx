import React from 'react';
import { Box, Card, CardContent, CardHeader, IconButton, Modal, Typography } from '@mui/material';
import { storageObject } from '@ska-telescope/ska-gui-local-storage';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export function HelpModal(): JSX.Element {
  const { help, helpToggle } = storageObject.useStore();

  function closeModal() {
    helpToggle();
  }

  return (
    <Modal open={help.showHelp}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card variant="outlined" sx={{ height: '90vh', width: '90vw' }}>
          <CardHeader
            action={
              <IconButton
                aria-label="DUMMY"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                onClick={() => closeModal()}
                color="inherit"
              >
                <HighlightOffIcon />
              </IconButton>
            }
            title={<Typography variant="h6">PDF Preview</Typography>}
          />
          <CardContent sx={{ height: '90vh', width: '90vw' }}>{help.content}</CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default HelpModal;
