import {
  MessageAuthor,
  MessageContainer,
  MessageItem,
  MessageWrap,
} from './MessageElements'

const Message = ({ messageList, input }) => {
  console.log('INPUT : ', input)
  return (
    <>
      {messageList.map((item, index) => {
        console.log(item.author)
        return (
          <MessageWrap key={index} item={item.author === input}>
            <MessageContainer item={item.author === input}>
              <MessageAuthor item={item.author === input}>
                {item.author}
              </MessageAuthor>
              <MessageItem item={item.author === input}>
                {item.message}
              </MessageItem>
            </MessageContainer>
          </MessageWrap>
        )
      })}
    </>
  )
}

export default Message
