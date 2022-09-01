import styled from 'styled-components'

export const SavedVideosBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
  }
`

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 35px;
  }
`
export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 350px;
`
export const NotFoundHead = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 30px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#000000')};
`
export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: #94a3b8;
`
export const SavedVideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 900px) {
    padding: 20px;
  }
`
export const SavedHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#f1f1f1')};
`
export const SavedIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  background-color: ${props => (props.darkTheme ? '#000000' : '#e2e8f0')};
`
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#000000')};
`
