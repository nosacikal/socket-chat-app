import styled from 'styled-components'

export const ButtonLoginContainer = styled.div`
  width: 80%;
  box-sizing: border-box;
`

export const Button = styled.button`
  padding: 12px 16px;
  width: 100%;
  background-color: #00bfa6;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 8px;

  &:hover {
    background-color: #00a18c;
    color: white;
    transition: all 0.2s ease-in;
  }
`
