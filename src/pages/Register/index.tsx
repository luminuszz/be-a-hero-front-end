/* eslint-disable import/no-unresolved */
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Section } from './styles';

const Register = () => (
  <Container>
    <Content>
      <Section>
        <img src={logo} alt="logo" />
        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </p>
        <Link to="/logon">
          <FiArrowLeft size={16} color="#E02041" />
          Tenho cadastro
        </Link>
      </Section>
      <form>
        <Input placeholder="Nome da ONG" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="Senha" />
        <Input placeholder="Whatsapp" />
        <div className="input-group">
          <Input placeholder="Cidade" />
          <Input placeholder="UF" style={{ width: 80 }} />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </Content>
  </Container>
);

export default Register;
