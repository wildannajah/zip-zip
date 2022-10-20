// import Iconify from '../../components/Iconify';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from './Image';
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
    <Image
      src={logo}
      sx={{ width: isMobile ? 250 : 300, margin: 'auto', cursor: 'pointer' }}
      onClick={handleClickLogo}
    />
  ) : (
    <Image
      src={logoDark}
      sx={{ width: isMobile ? 50 : 100, cursor: 'pointer' }}
      onClick={handleClickLogo}
    />
  );
}
