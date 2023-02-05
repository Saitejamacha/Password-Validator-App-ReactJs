import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled(AppContainer)`
  width: 90vw;
  height: 45vh;
  background-color: #475569;
  border-radius: 10px;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 35vw;
    height: 45vh;
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  color: white;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
export const Para = styled.p`
  font-size: 15px;
  font-family: Roboto;
  color: ${props => (props.errorText ? 'red' : 'white')};
`
export const Input = styled.input`
  height: 45px;
  width: 85vw;
  background-color: #edeeff;
  padding-left: 10px;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 45px;
    width: 25vw;
  }
`
