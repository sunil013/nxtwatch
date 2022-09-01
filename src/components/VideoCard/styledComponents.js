import styled from 'styled-components'

export const VideoCardItem = styled.li`
  list-style-type: none;
  background-color: transparent;
  width: 100%;
  margin-bottom: 5px;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 33%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
    padding: 10px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 8px;
  max-height: 170px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 12px;
`
export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 15px;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 15px;
  color: #94a3b8;
  margin-top: 0px;
  margin-bottom: 8px;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 0px;
`
export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 15px;
  color: #94a3b8;
  margin-top: 0px;
`
export const Dot = styled.p`
  font-size: 18px;
  color: #94a3b8;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
`
