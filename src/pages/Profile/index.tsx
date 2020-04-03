/* eslint-disable import/no-unresolved */
import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import { Container, Header, List } from './styles';


const Profile = () => {
  const history = useHistory();
  const logout = () => {
    sessionStorage.removeItem('token');
    history.push('/logon');
  };
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <span>Bem vinda, ONG</span>

        <Button type="button">
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/incidents/new"
          >
            Cadastrar novo caso
          </Link>
        </Button>
        <button onClick={logout} type="button" className="iconButton">
          <FiPower size={16} color="#E02041" />
        </button>
      </Header>
      <h1>Casos cadastratados</h1>

      <List>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>VALOR</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>VALOR</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>VALOR</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>
          <strong>VALOR</strong>
          <p>R$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </List>
    </Container>
  );
};

export default Profile;
