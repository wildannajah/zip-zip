import { Stack, styled, Typography } from '@mui/material';
import Page from '../components/Page';
import Logo from '../components/Logo';
import SearchForm from '../sections/home/SearchForm';

const RootStyle = styled('div')({
  height: '100vh',
  display: 'block',
  justifyContent: 'center',
  // alignItems: 'center',
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  paddingTop: '150px',
}));
export default function Home() {
  return (
    <Page title="Home">
      <RootStyle>
        <ContentStyle>
          <Stack spacing={10} alignItems="center" display="flex">
            <Stack display="flex" justifyContent="center">
              <Logo />
              <Typography textAlign="center">Find Everything Here!</Typography>
            </Stack>
            <SearchForm />
          </Stack>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
