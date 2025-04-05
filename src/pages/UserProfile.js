import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pages.css';

const UserProfile = () => {
  const { id } = useParams();
  
  const userData = {
    1: { name: 'João Silva', email: 'joao@exemplo.com', role: 'Desenvolvedor' },
    2: { name: 'Maria Souza', email: 'maria@exemplo.com', role: 'Designer' },
    3: { name: 'Pedro Santos', email: 'pedro@exemplo.com', role: 'Gerente de Produto' }
  };

  const user = userData[id] || { name: 'Usuário não encontrado', email: '', role: '' };

  return (
    <div className="page">
      <h1>Perfil do Usuário</h1>
      <div className="user-profile">
        <h2>{user.name}</h2>
        {user.email && (
          <>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Cargo:</strong> {user.role}</p>
          </>
        )}
      </div>
      <div className="page-links">
        <Link to="/" className="page-link">Página Inicial</Link>
      </div>
    </div>
  );
};

export default UserProfile;
