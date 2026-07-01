import { Link } from 'react-router-dom';
import logoCpe from '../../assets/logo-cpe.svg';

export function Header() {
  return (
    <header style={{ 
      backgroundColor: '#FFE712', 
      padding: '15px 40px', 
      display: 'flex', 
      justifyContent: 'space-between', // Joga a logo pra esquerda e o menu pra direita
      alignItems: 'center' // Alinha tudo no meio na vertical
    }}>
      
      <div>
        <div>
        <img 
          src={logoCpe} 
          alt="Logo da CPE" 
          style={{ height: '40px' }} // Você pode ajustar a altura aqui para bater com o Figma
        />
      </div>
      </div>

      <nav style={{ display: 'flex', gap: '300px' }}>
        <Link to="/home" style={{ color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}>
          HOME
        </Link>
        
        <Link to="/perfil" style={{ color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}>
          PERFIL
        </Link>
        
        <Link to="/usuarios" style={{ color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}>
          USUÁRIOS
        </Link>
      </nav>

    </header>
  );
}