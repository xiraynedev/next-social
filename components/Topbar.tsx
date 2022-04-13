import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MessageIcon from '@mui/icons-material/Message';
import AppBar from '@mui/material/AppBar';
import Search from '@mui/icons-material/Search';

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
          <Stack
            direction='row'
            alignItems='center'
            spacing={2}
          >
            <TextField variant='outlined' label='Search friends...' InputProps={{
              endAdornment: <Search />
            }}/>
          </Stack>
          <Stack direction='row'>
            <MessageIcon />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
