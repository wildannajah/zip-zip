import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';
import Logo from '../../components/Logo';
import useResponsive from '../../hooks/useResponsive';
import SearchForm from '../home/SearchForm';

export default function Navbar() {
  const isMobile = useResponsive('down', 'sm');
  return (
    <Box
      display="block"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: isMobile ? '' : 'background.secondary',
        color: isMobile ? 'text.primary' : '#fff',
        py: '1.25rem',
        pt: isMobile ? '2.5rem' : '1.25rem',
      }}
    >
      <Container
        sx={{
          justifyContent: 'center',
          maxWidth: '768px !important',
        }}
      >
        <Stack
          spacing={5}
          display="flex"
          justifyContent="center"
          sx={{
            backgroundColor: isMobile ? '' : 'background.secondary',
          }}
        >
          {!isMobile && (
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  color: '#fff',
                  '& hr': {
                    mx: 1,
                  },
                }}
              >
                <Typography variant="subtitle2">Download</Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: '#FFF' }}
                />
                <Typography variant="subtitle2">Ikuti kami di </Typography>
                <Iconify icon="akar-icons:instagram-fill" sx={{ mx: 1 }} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  color: '#fff',
                  '& hr': {
                    mx: 1,
                  },
                }}
              >
                <Typography variant="subtitle2">Daftar</Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: '#FFF' }}
                />
                <Typography variant="subtitle2">Login</Typography>
              </Box>
            </Stack>
          )}
          {isMobile ? (
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
            >
              <Iconify icon="ep:back" fontSize="28px" />
              <SearchForm />
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={3}
              display="flex"
              alignItems="center"
            >
              <Logo />
              <SearchForm />
              <Iconify
                icon="iconoir:profile-circled"
                fontSize="28px"
                sx={{ ml: 1 }}
              />
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
