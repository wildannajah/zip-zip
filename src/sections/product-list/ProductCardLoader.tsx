import { Card, CardContent, CardMedia, Grid, Skeleton } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';

export default function ProductCardLoader() {
  const isMobile = useResponsive('down', 'sm');
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <CardMedia>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 150 : 250}
          />
        </CardMedia>
        <CardContent>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </CardContent>
      </Card>
    </Grid>
  );
}
