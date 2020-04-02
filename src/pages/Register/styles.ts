import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1128px;
  height: 100vh;
  margin: 0 auto;
  /* Flex-box */
  display: flex;
  align-items: center;

  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
    max-width: 450px;
  }

  input {
    margin-top: 8px;
  }
  .input-group {
    display: flex;
  }
  .input-group input + input {
    margin-left: 8px;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 30px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
`;
