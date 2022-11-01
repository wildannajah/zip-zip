import { Box, Container, Stack, Typography } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

export default function Footer() {
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
            <Stack direction="row" display="flex" justifyContent="center">
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
                <Typography variant="subtitle2">Powered by Zipzip</Typography>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
