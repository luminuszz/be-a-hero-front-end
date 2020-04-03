/* eslint-disable import/no-unresolved */
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Progress from '../../components/Progress';
import api from '../../services/api';
import { Container, Content, Section } from './styles';

const NewIncident = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [textArea, setTextArea] = useState('');
  const [load, setLoad] = useState(false);
  const handleSubmit:SubmitHandler = async ({ title, value }) => {
    setLoad(true);
    const values = {
      title,
      description: textArea,
      value,
    };
    const response = await api
      .post('/incidents', values)
      .then(() => {
        setLoad(false);
        toast.success('Incidente cadastrado com sucesso');
        history.push('/profile');
      })
      .catch((err) => { toast.error(`Erro${err}`); setLoad(false); });
    console.tron.log(response);
  };


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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="title" placeholder="Título do caso" />
            <textarea
              onChange={(e) => setTextArea(e.target.value)}
              placeholder="Descrição"
            />
            <Input
              type="number"
              name="value"
              style={{ width: '300px' }}
              placeholder="Valor em reais"
            />
            <Button type="submit">
              <Progress load={load} defaultValue="Cadastrar" />
            </Button>
          </Form>
        </div>
      </Content>
    </Container>
  );
};

export default NewIncident;
