import { Container, Grid, Stack } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../sections/product-list/Navbar';
import ProductCard from '../sections/product-list/ProductCard';
import ProductCardLoader from '../sections/product-list/ProductCardLoader';

export default function Product() {
  return (
    <Page title="Products">
      <Navbar />
      <Container>
        <Stack direction="row" pt="2rem">
          <Grid container spacing={2}>
            <ProductCard />
            <ProductCardLoader />
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
