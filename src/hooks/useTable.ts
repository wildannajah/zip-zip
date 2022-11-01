import { useState } from 'react';

export default function useTable() {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(9);

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };
  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    //
    onChangePage,
    onChangeRowsPerPage,
  };
}
