/* eslint-disable import/no-unresolved */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { Container, Section, Img } from './styles';

const Logon = () => (
  <Container>
    <Section>
      <Img src={logo} alt="be the hero" />
      <form>
        <h1>faça seu logon</h1>

        <input placeholder="Informe seu login" />
        <input type="password" placeholder="Informe seu login" />

        <a href="/register">
          Não tenho cadastro
          <FiLogIn size={16} color="#E02041" />
        </a>
      </form>
    </Section>
    <Img src={heroes} alt="heroes" />
  </Container>
);


export default Logon;
