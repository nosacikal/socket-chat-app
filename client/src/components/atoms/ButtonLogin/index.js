import { Button, ButtonLoginContainer } from './ButtonLoginElements'

const ButtonLogin = ({ onClick }) => {
  return (
    <>
      <ButtonLoginContainer>
        <Button onClick={onClick}>Enter Chat</Button>
      </ButtonLoginContainer>
    </>
  )
}

export default ButtonLogin
