import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from '../../components/Iconify';
import useResponsive from '../../hooks/useResponsive';

export default function ProductCard() {
  const srcImg = '../assets/images/shopee.svg';
  const isMobile = useResponsive('down', 'sm');
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height={isMobile ? '150' : '250'}
          image="https://bandung.transstudiomall.com/asset/tenant/201912191024540000004.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Converse 70s</Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="subtitle2" fontSize="13px">
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
                    Shopee
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
                  spacing={1}
                >
                  <Iconify icon="ic:twotone-discount" color="#FE7042" />
                  <Typography
                    color="#FE7042"
                    fontSize={isMobile ? '10px' : '13px'}
                  >
                    30%
                  </Typography>
                </Stack>
                <Stack direction="row">
                  {[...Array(4)].map(() => {
                    const random = Math.random();
                    console.log(random);
                    return (
                      <Iconify
                        fontSize="13px"
                        key={Math.random()}
                        icon="bxs:star"
                        color="#FFCE31"
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="subtitle1" fontSize={isMobile ? '10px' : ''}>
                Rp. 750.000,-
              </Typography>
              <Button
                sx={{
                  backgroundColor: '#C2224C',
                  color: '#fff',
                  borderRadius: '50px',
                  paddingX: '1rem',
                }}
                size="small"
              >
                <Typography
                  variant="subtitle2"
                  fontSize={isMobile ? '7px' : ''}
                >
                  Lihat Produk
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
