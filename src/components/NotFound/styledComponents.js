import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 70%;
    flex-grow: 1;
  }
`
export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 350px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const NotFoundText = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  color: ${props => (props.darkTheme ? '#94a3b8' : '#64748b')};
`
export const NotFoundBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
