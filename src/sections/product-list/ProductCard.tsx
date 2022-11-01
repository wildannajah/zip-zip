import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from '../../components/Iconify';
import useResponsive from '../../hooks/useResponsive';

interface ProductProps {
  image: string;
  name: string;
  price: string;
  link: string;
  source: string;
}

export default function ProductCard({
  image,
  name,
  price,
  link,
  source,
}: ProductProps) {
  const srcImg = '../assets/images/shopee.svg';
  const isMobile = useResponsive('down', 'sm');

  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          boxShadow:
            '0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);',
        }}
      >
        <CardMedia
          component="img"
          height={isMobile ? '150' : '250'}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h4">{`${name.slice(0, 20)}...`}</Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="subtitle1" color="grey.400">
                  Jakarta
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ transform: 'translateX(-5px)' }}
                >
                  <img src={srcImg} alt="" width="21px" />

                  <Typography
                    variant="subtitle2"
                    color="#E74C2D"
                    fontSize={isMobile ? '11px' : ''}
                  >
                    {source}
                  </Typography>
                </Stack>
              </div>
              <Stack spacing={0.01} alignItems="end">
                <img
                  src="../assets/images/delivery.svg"
                  alt=""
                  width={isMobile ? '25px' : '30px'}
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  fontSize={isMobile ? '10px' : '13px'}
                  spacing={0.3}
                >
                  <Iconify icon="ic:twotone-discount" color="#FE7042" />
                  <Typography
                    color="#FE7042"
                    fontSize={isMobile ? '10px' : '13px'}
                  >
                    30%
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  display="flex"
                  alignItems="center"
                  spacing={0.3}
                >
                  <Iconify icon="bxs:star" color="#FFCE31" />
                  <Typography variant="subtitle2">4.3</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5" fontSize={isMobile ? '10px' : ''}>
                {`${Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(parseInt(price, 10))},-`}
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{
                  minWidth: 'max-content',
                  backgroundColor: '#C2224C',
                  color: '#fff',
                  borderRadius: '50px',
                  paddingX: '1rem',
                }}
                size="small"
              >
                <Link
                  href={link}
                  style={{ textDecoration: 'none' }}
                  color="#fff"
                  target="_blank"
                >
                  <Typography
                    variant="subtitle2"
                    fontSize={isMobile ? '7px' : ''}
                    sx={{
                      textDecoration: 'none !important',
                    }}
                  >
                    Lihat
                  </Typography>
                </Link>
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
