import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-right: 20px;
`;
export const Label = styled.label`
  font-size: 20px;
  display: inline-grid;
  margin-bottom: 15px;
  margin-right: 10px;
`;

export const Input = styled.input`
  font-size: 20px;
  margin-top: 15px;
`;
export const Form = styled.form`
  display: block;
  padding: 20px;
  border: 1px solid black;
  width: 300px;
  height: 250px;
`;

export const Button = styled.button`
  display: block;
  width: 85px;
  height: 30px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: aqua;
  }
`;

export const ContactList = styled.ul``;

export const ContactItem = styled.li`
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  width: 160px;
`;

export const Number = styled.span`
  width: 80px;
`;
