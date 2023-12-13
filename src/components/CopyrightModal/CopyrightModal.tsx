import React from 'react';
import { Box, Card, CardContent, CardHeader, IconButton, Modal, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export interface CopyrightModalProps {
  show: boolean;
  copyrightFunc: Function;
}

export function CopyrightModal({ show, copyrightFunc }: CopyrightModalProps): JSX.Element {
  const copyright = [
    'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:',
    '1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.',
    '2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.',
    '3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.',
    'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.',
  ];

  function closeModal() {
    copyrightFunc(false);
  }

  return (
    <Modal open={show}>
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
            title={<Typography variant="h6">Copyright SKA Observatory</Typography>}
          />
          <CardContent>
            {copyright.map((item: string) => (
              <>
                <Typography mb={2} variant="body2" component="div">
                  {item}
                </Typography>
              </>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default CopyrightModal;
