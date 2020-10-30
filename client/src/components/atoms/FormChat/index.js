import {
  ButtonChatContainer,
  ButtonChatInput,
  FormChatContainer,
  FormChatInput,
} from './FormChatElements'

const FormChat = ({ sendMessage, handleMessage }) => {
  return (
    <>
      <FormChatContainer onSubmit={sendMessage}>
        <FormChatInput
          placeholder='Type a message here...'
          onChange={(e) => handleMessage(e)}
        />
        <ButtonChatContainer>
          <ButtonChatInput onClick={sendMessage} />
        </ButtonChatContainer>
      </FormChatContainer>
    </>
  )
}

export default FormChat
