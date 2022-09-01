import styled from 'styled-components'

export const VideoDetailsBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 75%;
    flex-grow: 1;
    padding-top: 20px;
    padding-left: 25px;
  }
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 300px;
  @media screen and (min-width: 576px) {
    height: 350px;
  }
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    height: 500px;
  }
`
export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 17px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  line-height: 1.5;
  margin-bottom: 8px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 15px;
  color: #94a3b8;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
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
export const NotFoundButton = styled.button`
  width: 110px;
  height: 33px;
  background-color: #4f46e5;
  border: none;
  color: #f9f9f9;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const LikeAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const LikeDislikeSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LikeText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#000000')};
  margin-right: 20px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: #e2e8f0 solid 1px;
`
export const VideoTextContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const ChannelImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 0px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#000000')};
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: #94a3b8;
  margin-top: 0px;
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#313131')};
`
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
