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

interface Idata{
name:string;
email:string;
password:string;
whatsapp:string;
city:string;
uf:string;
}

const Register = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const handeSubimit: SubmitHandler = async (data: Idata) => {
    setLoad(true);

    api
      .post('/createOngs', data)
      .then((response) => {
        setLoad(false);
        toast.success(`Ong criada com sucesso, seu id:${response.data.id}`);
        localStorage.setItem('id', response.data.id);
        history.push('/logon');
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Erro ao criar a ong:${error}`);
      })
      .finally(() => setLoad(false));
  };


  return (
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
        <Form ref={formRef} onSubmit={handeSubimit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="email" />
          <Input name="password" type="password" placeholder="Senha" />
          <Input name="whatsapp" placeholder="Whatsapp" />
          <div className="input-group">
            <Input name="city" placeholder="Cidade" />
            <Input
              name="uf"
              placeholder="UF"
              style={{ width: 80, marginLeft: '8px' }}
            />
          </div>
          <Button setDisabled={load} type="submit">
            <Progress
              style={{ marginTop: '8px' }}
              defaultValue="Cadastrar"
              load={load}
            />
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
