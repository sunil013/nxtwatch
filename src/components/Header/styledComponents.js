import styled from 'styled-components'

export const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  @media screen and (min-width: 590px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const NavLogo = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const NavIconsContainerMobile = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavIconsContainerDesktop = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavIconItem = styled.li`
  list-style-type: none;
  margin-left: 18px;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 35px;
  }
`
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  width: 110px;
  height: 35px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  //   border-width: 1px;
  //   border-style: solid;
  border: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')} solid 1px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
`
export const PopupMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#00306e')};
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PopupCloseButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #94a3b8;
  background-color: transparent;
  border: #94a3b8 solid 1px;
  margin-right: 15px;
  cursor: pointer;
  outline: none;
`

export const PopupConfirmButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #f9f9f9;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  outline: none;
`
export const PopupMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 30px 20px 30px 20px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
`
export const PopupMobileListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  //   align-items: center;
`

export const PopupMobileListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => {
    const {darkTheme} = props
    const color = darkTheme ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`
export const ListItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  margin-left: 20px;
`
export const MobilePopupButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const PopupLogoutContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 100%;
  //   height: 100%;
  //   padding: 30px 20px 30px 20px;
  //   background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50%;
  }
`
