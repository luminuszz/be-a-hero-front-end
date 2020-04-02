/* eslint-disable import/no-unresolved */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

const Logon = () => (
  <Container>
    <section>
      <img src={logo} alt="be the hero" />
      <form>
        <h1>Faça seu logon</h1>
        <Input type="text" placeholder="Informe seu login" />
        <Input type="password" placeholder="Informe sua senha" />
        <Button type="submit">Login</Button>
        <a href="/register">
          Não tenho cadastro
          <FiLogIn size={16} color="#E02041" />
        </a>
      </form>
    </section>
    <img src={heroes} alt="heroes" />
  </Container>
);


export default Logon;
