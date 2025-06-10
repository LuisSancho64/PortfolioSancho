import { Link } from 'react-router-dom';
import { routes } from '../../routes/RootRoutes';
import s from './Logo.module.scss';
import logoMorado from '../../assets/logomorado2.png'; // Ajusta la ruta según ubicación real

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.Home} aria-label="site logo">
        <img 
          src={logoMorado} 
          alt="Site Logo" 
          className={s.logoImage} 
          width={180} 
        />
      </Link>
    </div>
  );
};

export default Logo;
