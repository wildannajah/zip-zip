import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function ProductLayout() {
  return (
    <Stack>
      <Outlet />
    </Stack>
  );
}
