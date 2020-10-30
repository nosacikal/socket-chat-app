import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #0cebeb,
    #00eae2,
    #00e9d8,
    #00e8cd,
    #00e6c2,
    #0de7bf,
    #18e9bb,
    #22eab7,
    #24efbb,
    #25f4be,
    #27fac2,
    #29ffc6
  );
`

export const ChatWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #f3f6ff;
  box-shadow: 7px 7px 15px 10px rgba(0, 0, 0, 0.05);
`

export const ChatMessage = styled.div`
  flex: 80%;
  width: 100%;
`
export const ChatInputMessage = styled.div`
  flex: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
