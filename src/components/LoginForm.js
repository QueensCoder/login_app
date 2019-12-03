import React from "react";
import styled, { a, div, form } from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const LoginForm = () => {
  return (
    <FormContainer>
      <Title>Some title stuff</Title>
    </FormContainer>
  );
};

export default LoginForm;
