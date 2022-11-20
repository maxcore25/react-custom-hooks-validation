import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useInput } from './hooks/useInput';

function App() {
  const email = useInput('', {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
    maxLength: 30,
  });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 8 });

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
          <Stack sx={{ gap: '32px' }}>
            <Typography
              variant='h3'
              textAlign='center'
              sx={{ fontWeight: 700 }}>
              Login
            </Typography>
            <Stack sx={{ gap: '24px' }}>
              <Stack sx={{ gap: '16px' }}>
                <TextField
                  label='Email'
                  name='email'
                  variant='outlined'
                  value={email.value}
                  onChange={e => email.onChange(e)}
                  onBlur={e => email.onBlur(e)}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '12px',
                    },
                  }}
                />
                <Stack>
                  {email.isDirty && email.isEmpty && (
                    <div style={{ color: 'red' }}>Field cannot be empty</div>
                  )}
                  {email.isDirty && email.isMinLengthError && (
                    <div style={{ color: 'red' }}>
                      Field must have minimal length
                    </div>
                  )}
                  {email.isDirty && email.isMaxLengthError && (
                    <div style={{ color: 'red' }}>Too long email</div>
                  )}
                  {email.isDirty && email.isEmailError && (
                    <div style={{ color: 'red' }}>Incorrect email pattern</div>
                  )}
                </Stack>
              </Stack>
              <Stack sx={{ gap: '16px' }}>
                <TextField
                  label='Password'
                  name='password'
                  type='password'
                  variant='outlined'
                  value={password.value}
                  onChange={e => password.onChange(e)}
                  onBlur={e => password.onBlur(e)}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '12px',
                    },
                  }}
                />
                <Stack>
                  {password.isDirty && password.isEmpty && (
                    <div style={{ color: 'red' }}>Field cannot be empty</div>
                  )}
                  {password.isDirty && password.isMinLengthError && (
                    <div style={{ color: 'red' }}>
                      Field must have minimal length
                    </div>
                  )}
                </Stack>
              </Stack>
              <Button
                type='submit'
                variant='contained'
                disabled={!email.isInputValid || !password.isInputValid}
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
