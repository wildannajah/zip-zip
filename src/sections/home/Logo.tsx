// import Iconify from '../../components/Iconify';
import Image from '../../components/Image';
import logo from '../../assets/images/logo.png';
import useResponsive from '../../hooks/useResponsive';

export default function Logo() {
  const isMobile = useResponsive('down', 'sm');
  return (
    <Image src={logo} sx={{ width: isMobile ? 250 : 300, margin: 'auto' }} />
  );
}
