// import Iconify from '../../components/Iconify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';
import useResponsive from '../hooks/useResponsive';

export default function Logo() {
  const isMobile = useResponsive('down', 'sm');
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');
  return isHome ? (
    <Box onClick={handleClickLogo}>
      <img
        src={logo}
        alt="logo"
        style={{
          width: isMobile ? '250px' : '300px',
          margin: 'auto',
          cursor: 'pointer',
        }}
      />
    </Box>
  ) : (
    <Box onClick={handleClickLogo}>
      <img
        src={logoDark}
        alt="logo"
        style={{
          width: isMobile ? '50px' : '100px',
          margin: 'auto',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
}
