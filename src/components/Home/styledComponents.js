import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px 10px 20px 10px;
  @media screen and (min-width: 768px) {
    padding: 30px 20px 30px 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 30px 30px 30px 30px;
  }
`
export const BannerImage = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const BannerImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #212121;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const BannerButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: transparent;
  border: #212121 solid 1px;
  color: #212121;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 320px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  //   align-self: flex-end;
`

export const BodyContainer = styled.div`
  height: 90vh;
  //   width: 100%;
  display: flex;
  flex-direction: column;
  //   overflow-y: scroll;
  @media screen and (min-width: 768px) {
    // width: 70%;
    flex-grow: 1;
  }
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
export const SearchInputContainer = styled.div`
  width: 90%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  border: #475569 solid 1px;
  @media screen and (max-width: 767px) {
    align-self: center;
  }
  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
export const SearchBox = styled.input`
  background-color: transparent;
  color: #606060;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  flex-grow: 1;
  padding-left: 10px;
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #7e858e;
  padding: 5px 10px 5px 10px;
  @media screen and (min-width: 768px) {
    padding: 8px 20px 8px 20px;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideosContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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
