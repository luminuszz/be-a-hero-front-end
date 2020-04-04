/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import { api, abort } from '../../services/api';
import { Container, Header, List } from './styles';

const ongName = sessionStorage.getItem('ongName');
interface Iincidentes{
  id:number,
  title:string,
  description:string,
  value:number,
}


const Profile = () => {
  const [incidents, setIncidets] = useState<Iincidentes[]>([]);
  const history = useHistory();
  useEffect(() => {
    async function inciRequest() {
      const response = await api.get('/profile', {
        cancelToken: abort.token,
      });
      console.tron.log(response);
      setIncidets(response.data);
    }
    inciRequest();
  }, []);
  const deleteIncidents = async (id: number) => {
    await api
      .delete(`/incidents/${id}`)
      .then(() => toast.success('Incidente deletado com sucesso.'))
      .catch(() => toast.error('Erro ao deletar, Tente novamente.'));

    setIncidets(incidents.filter((incident) => incident.id !== id));
  };

  const logout = () => {
    sessionStorage.clear();
    history.push('/logon');
  };


  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <span>{`Bem vinda ${ongName}`}</span>

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
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>
            <strong>VALOR</strong>
            <p>
              {Intl.NumberFormat('pt-br',
                {
                  style: 'currency',
                  currency: 'BRL',
                })
                .format(incident.value)}

            </p>
            <button type="button" onClick={(e) => deleteIncidents(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Profile;
