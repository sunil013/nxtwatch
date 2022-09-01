import styled from 'styled-components'

export const SavedVideoCardItem = styled.li`
  list-style-type: none;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-top: 15px;
  }
`
export const SavedVideoImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 300px;
    max-height: 160px;
    margin-bottom: 0px;
  }
`
export const SavedCardTextContainerSmall = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const SavedChannelImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const SavedVideoDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 8px;
  @media screen and (min-width: 576px) {
    font-size: 17px;
  }
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const SavedViewsTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const SavedText = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 14px;
  color: #94a3b8;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 900px) {
    font-size: 17px;
  }
`
export const SavedCardTextContainerLarge = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
