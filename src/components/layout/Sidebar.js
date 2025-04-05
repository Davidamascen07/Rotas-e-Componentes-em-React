import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Perfis de Exemplo</h3>
      <ul>
        <li><Link to="/user/1">Usuário 1</Link></li>
        <li><Link to="/user/2">Usuário 2</Link></li>
        <li><Link to="/user/3">Usuário 3</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
