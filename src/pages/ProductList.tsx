import { Container, Grid, Stack } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../sections/product-list/Navbar';
import ProductCard from '../sections/product-list/ProductCard';
import ProductCardLoader from '../sections/product-list/ProductCardLoader';
import response from '../query/response.json';

export default function Product() {
  const { array: products } = response;
  console.log(products);
  return (
    <Page title="Products">
      <Navbar />
      <Container>
        <Stack direction="row" pt="2rem">
          <Grid container spacing={2}>
            {products.map((product) => {
              const [image, price, name, link, source] = product;
              return (
                <ProductCard
                  key={link}
                  image={image}
                  price={price}
                  name={name}
                  link={link}
                  source={source}
                />
              );
            })}
            <ProductCardLoader />
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
