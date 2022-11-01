import { Box, Stack } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';
import Iconify from '../Iconify';

interface Props {
  onChangePage: (page: number) => void;
}
export default function Pagination({ onChangePage }: Props) {
  const { items } = usePagination({
    count: 10,
  });
  return (
    <Stack
      display="flex"
      direction="row"
      justifyContent="center"
      sx={{
        border: 1,
        borderColor: 'grey.500',
        width: 'max-content',
        borderRadius: '5px',
        m: 'auto',
      }}
    >
      {items.map(({ page, type, selected, ...item }) => {
        let divider = false;
        let children = null;
        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = (
            <Box
              display="flex"
              justifyContent="center"
              style={{
                fontWeight: selected ? 'bold' : undefined,
              }}
            >
              ...
            </Box>
          );
          divider = true;
        } else if (type === 'page') {
          divider = true;
          children = (
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                fontWeight: selected ? 'bold' : undefined,
                backgroundColor: selected ? 'primary.main' : '',
                color: selected ? '#fff' : '#000',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'error.dark', color: '#fff' },
              }}
              {...item}
            >
              {page}
            </Box>
          );
        } else {
          divider = type === 'previous';
          children = (
            <Box
              {...item}
              display="flex"
              justifyContent="center"
              height="100%"
              alignItems="center"
              sx={{
                backgroundColor: selected ? 'primary.main' : '',
                color: selected ? '#fff' : '#000',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'error.dark', color: '#fff' },
              }}
            >
              {type === 'previous' ? (
                <Iconify icon="ic:round-arrow-back-ios" />
              ) : (
                <Iconify icon="ic:round-arrow-forward-ios" />
              )}
            </Box>
          );
        }

        return (
          <Box
            key={Math.random()}
            sx={{
              width: '30px',
              // borderLeft: page === 1 ? 1 : 0,
              borderRight: divider ? 1 : 0,
              borderColor: 'grey.500',
            }}
            onClick={() =>
              page && type === 'page' ? onChangePage(page - 1) : ''
            }
          >
            {children}
          </Box>
        );
      })}
    </Stack>
  );
}
