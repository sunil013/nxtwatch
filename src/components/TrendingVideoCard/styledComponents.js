import styled from 'styled-components'

export const TrendingVideoCardItem = styled.li`
  list-style-type: none;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-top: 15px;
  }
`
export const TrendingVideoImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 300px;
    margin-bottom: 0px;
  }
`
export const TrendingCardTextContainerSmall = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingChannelImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const TrendingVideoDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-top: 0px;
  line-height: 1.5;
  margin-bottom: 8px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const TrendingViewsTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const TrendingText = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 14px;
  color: #94a3b8;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`
export const TrendingCardTextContainerLarge = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
