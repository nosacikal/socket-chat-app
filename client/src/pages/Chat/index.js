import { FormChat, Message } from '../../components'
import {
  ChatContainer,
  ChatInputMessage,
  ChatMessage,
  ChatWrapper,
} from './ChatElements'

const Chat = ({ sendMessage, messageList, handleMessage, input }) => {
  return (
    <>
      <ChatContainer>
        <ChatWrapper>
          <ChatMessage>
            <Message messageList={messageList} input={input} />
          </ChatMessage>
          <ChatInputMessage>
            <FormChat
              sendMessage={sendMessage}
              handleMessage={(e) => handleMessage(e)}
            />
          </ChatInputMessage>
        </ChatWrapper>
      </ChatContainer>
    </>
  )
}

export default Chat
