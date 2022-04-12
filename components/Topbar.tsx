import { TextField, Toolbar, Typography, Stack } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import AppBar from '@mui/material/AppBar';

export default function Topbar() {
  return (
    <AppBar position='fixed' color='secondary'>
      <Toolbar>
        <Stack
          width='100%'
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Typography variant='h1' fontSize='2rem'>
            Next Social
          </Typography>
          <TextField label='Search friends...' />
          <Stack direction='row'>
            <MessageIcon />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
