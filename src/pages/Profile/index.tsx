/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import api from '../../services/api';
import { Container, Header, List } from './styles';

interface Iincidentes{
  title:string,
  description:string,
  value:number,
}


const Profile = () => {
  const [incidents, setIncidets] = useState<Iincidentes[]>([]);
  const history = useHistory();
  useEffect(() => {
    const inciRequest = async () => {
      const response = await api.get('/profile');
      console.tron.log(response);
      setIncidets(response.data);
    };
    inciRequest();
  }, []);

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
        {incidents.map((incident) => (
          <li>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>
            <strong>VALOR</strong>
            <p>{incident.value}</p>
            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Profile;
