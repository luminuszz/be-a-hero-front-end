/* eslint-disable import/no-unresolved */
import { Form } from '@unform/web';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Section } from './styles';

const NewIncident = () => {
  function handleSubmit() {
    return 'teste';
  }
  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreve o csao detalhadamente para econtrar um heroi para resolve
            isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>
        <div className="form">
          <form>
            <input name="title" placeholder="Título do caso" />
            <textarea placeholder="Descrição" />
            <input
              name="value"
              style={{ width: '300px' }}
              placeholder="Valor em reais"
            />
            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default NewIncident;
