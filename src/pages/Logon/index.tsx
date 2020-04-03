/* eslint-disable import/no-unresolved */
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

const Logon = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = (data) => data;


  return (
    <Container>
      <section>
        <img src={logo} alt="be the hero" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="login" type="text" placeholder="Informe seu login" />
          <Input
            name="password"
            type="password"
            placeholder="Informe sua senha"
          />
          <Button type="submit">Login</Button>
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
