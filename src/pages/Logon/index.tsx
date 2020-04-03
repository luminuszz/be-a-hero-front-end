/* eslint-disable import/no-unresolved */
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Progress from '../../components/Progress';
import api from '../../services/api';
import { Container } from './styles';

const Logon = () => {
  const formRef = useRef<FormHandles>(null);
  const [load, setLoad] = useState(false);
  const history = useHistory();
  const handleSubmit: SubmitHandler = async (data) => {
    setLoad(true);
    await api.post('/login', data)
      .then((response) => {
        setLoad(false);
        const { token } = response.data;
        sessionStorage.setItem('token', token);
        console.tron.log('passei por aqui');
        history.push('/profile');
        toast.success('Logado com sucesso');
      }).catch((error) => {
        toast.error(`Erro${error}`);
      }).finally(() => setLoad(false));
  };


  return (
    <Container>
      <section>
        <img src={logo} alt="be the hero" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="id" type="text" placeholder="Informe seu login" />
          <Input
            name="password"
            type="password"
            placeholder="Informe sua senha"
          />
          <Button setDisabled={load} type="submit">
            <Progress
              load={load}
              style={{ marginTop: '8px' }}
              defaultValue="Login"
            />
          </Button>
          <Link to="/register">
            Não tenho cadastro
            <FiLogIn size={16} color="#E02041" />
          </Link>
        </Form>
      </section>
      <img src={heroes} alt="heroes" />
    </Container>
  );
};


export default Logon;
