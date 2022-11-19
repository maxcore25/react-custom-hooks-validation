import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        p: '1em',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Paper
        elevation={3}
        sx={{ p: '2em', maxWidth: '500px', flex: 1, borderRadius: '12px' }}>
        <form>
          <Stack gap={4}>
            <Typography
              variant='h3'
              textAlign='center'
              sx={{ fontWeight: 700 }}>
              Login
            </Typography>
            <Stack gap={3}>
              <TextField
                label='Email'
                name='email'
                variant='outlined'
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '12px',
                  },
                }}
              />
              <TextField
                label='Password'
                name='password'
                variant='outlined'
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '12px',
                  },
                }}
              />
              <Button
                variant='contained'
                sx={{
                  p: '.8em 2em',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  borderRadius: '12px',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default App;
