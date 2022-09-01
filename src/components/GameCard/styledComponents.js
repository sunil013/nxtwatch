import styled from 'styled-components'

export const GameCardContainer = styled.li`
  list-style-type: none;
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 33%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
    padding: 8px;
    margin-bottom: 13px;
  }
  @media screen and (min-width: 1400px) {
    width: 20%;
    padding: 10px;
  }
`
export const GameImage = styled.img`
  width: 100%;
  margin-bottom: 5px;
  max-height: 300px;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  @media screen and (min-width: 100px) {
    font-size: 20px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#000000')};
`
export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 0px;
  margin-top: 7px;
  color: #94a3b8;
  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`
