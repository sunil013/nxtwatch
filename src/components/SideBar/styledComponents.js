import styled from 'styled-components'

export const SideBarDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  max-width: 220px;
  flex-shrink: 0;
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SideBarListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const SideBarListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  background-color: ${props => {
    const {darkTheme} = props
    const color = darkTheme ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  @media screen and (min-width: 1200px) {
    padding-left: 20px;
  }
`
export const ListItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  margin-left: 20px;
`
export const SidebarContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactUsHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const SocialMediaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
`
export const SocialMediaItem = styled.li`
  list-style-type: none;
  margin-right: 15px;
`
export const SocialMediaImage = styled.img`
  width: 35px;
  height: 35px;
`
export const ContactText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
