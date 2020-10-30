import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'

export const FormChatContainer = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding: 14px;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border-radius: 50px;
  margin-right: 12px;
  margin-left: 12px;
`
export const FormChatInput = styled.input`
  width: 90%;
  padding: 10px 16px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  font-size: 0.9rem;
  border: none;
  outline: none;
`
export const ButtonChatContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: #e4eaf3;
  border-radius: 50%;
  box-sizing: border-box;
`

export const ButtonChatInput = styled(FiSend)`
  color: blue;
  font-size: 1.2rem;
  cursor: pointer;
`
