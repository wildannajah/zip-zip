import { Stack } from '@mui/material';
import Logo from '../../components/Logo';
import SearchForm from '../home/SearchForm';

export default function Navbar() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: 'background.secondary',
      }}
    >
      <Stack
        direction="row"
        sx={{
          backgroundColor: 'background.secondary',
        }}
      >
        <Logo />
        <SearchForm />
      </Stack>
    </Stack>
  );
}
