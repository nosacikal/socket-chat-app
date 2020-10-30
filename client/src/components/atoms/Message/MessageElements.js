import styled from 'styled-components'

export const MessageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ item }) => (item ? 'flex-end' : 'flex-start')};
`

export const MessageContainer = styled.div`
  max-width: 40%;
  background-color: ${({ item }) => (item ? '#f26baa' : '#ffffff')};
  margin: 10px 24px;
  border-radius: ${({ item }) =>
    item ? '20px 20px 0px 20px' : '20px 20px 20px 0px'};

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding: 10px 20px;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.1);
`
export const MessageAuthor = styled.p`
  color: ${({ item }) => (item ? '#ffffff' : '#434a53')};
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
  font-weight: 800;
`
export const MessageItem = styled.p`
  color: ${({ item }) => (item ? '#ffffff' : '#434a53')};
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`
