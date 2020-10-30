import { ChatImage } from '../../assets'
import { ButtonLogin, FormLogin } from '../../components'
import {
  FormContainer,
  ImageChat,
  ImageContainer,
  LoginContainer,
} from './LoginElements'
const Login = ({ onChange, input, connectToRoom }) => {
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <FormLogin
            type='text'
            placeholder='Username'
            value={input.username}
            onChange={(e) => onChange('username', e)}
          />
          <FormLogin
            type='text'
            placeholder='Room'
            value={input.room}
            onChange={(e) => onChange('room', e)}
          />
          <ButtonLogin onClick={connectToRoom} />
        </FormContainer>
        <ImageContainer>
          <ImageChat src={ChatImage} />
        </ImageContainer>
      </LoginContainer>
    </>
  )
}

export default Login
