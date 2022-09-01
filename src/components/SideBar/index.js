import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import WatchContext from '../../context/WatchContext'

import {
  SideBarDesktop,
  SideBarListContainer,
  SideBarListItem,
  ListItemText,
  SidebarContactContainer,
  ContactUsHead,
  SocialMediaContainer,
  SocialMediaItem,
  SocialMediaImage,
  ContactText,
} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SideBar = () => (
  //   const style = {
  //     width: '23px',
  //     height: '23px',
  //     color: '#7e858e',
  //   }
  <WatchContext.Consumer>
    {value => {
      const {darkTheme, activeMenu, changeActiveMenu} = value
      const styleLink = {textDecoration: 'none'}
      const iconColor = darkTheme ? '#424242' : '#7e858e'
      const iconActive = '#ff0b37'
      return (
        <SideBarDesktop darkTheme={darkTheme}>
          <SideBarListContainer>
            <Link to="/" style={styleLink}>
              <SideBarListItem
                darkTheme={darkTheme}
                key="HOME"
                isActive={activeMenu === activeMenuConstants.home}
                onClick={() => changeActiveMenu(activeMenuConstants.home)}
              >
                <AiFillHome
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.home
                      ? iconActive
                      : iconColor
                  }
                />
                <ListItemText darkTheme={darkTheme}>Home</ListItemText>
              </SideBarListItem>
            </Link>
            <Link to="/trending" style={styleLink}>
              <SideBarListItem
                darkTheme={darkTheme}
                key="TRENDING"
                isActive={activeMenu === activeMenuConstants.trending}
                onClick={() => changeActiveMenu(activeMenuConstants.trending)}
              >
                <AiTwotoneFire
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.trending
                      ? iconActive
                      : iconColor
                  }
                />
                <ListItemText darkTheme={darkTheme}>Trending</ListItemText>
              </SideBarListItem>
            </Link>
            <Link to="/gaming" style={styleLink}>
              <SideBarListItem
                darkTheme={darkTheme}
                key="GAMING"
                isActive={activeMenu === activeMenuConstants.gaming}
                onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
              >
                <SiYoutubegaming
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.gaming
                      ? iconActive
                      : iconColor
                  }
                />
                <ListItemText darkTheme={darkTheme}>Gaming</ListItemText>
              </SideBarListItem>
            </Link>
            <Link to="/saved-videos" style={styleLink}>
              <SideBarListItem
                darkTheme={darkTheme}
                key="SAVED_VIDEOS"
                isActive={activeMenu === activeMenuConstants.savedVideos}
                onClick={() =>
                  changeActiveMenu(activeMenuConstants.savedVideos)
                }
              >
                <BiListPlus
                  size={25}
                  color={
                    activeMenu === activeMenuConstants.savedVideos
                      ? iconActive
                      : iconColor
                  }
                />
                <ListItemText darkTheme={darkTheme}>Saved videos</ListItemText>
              </SideBarListItem>
            </Link>
          </SideBarListContainer>
          <SidebarContactContainer>
            <ContactUsHead darkTheme={darkTheme}>CONTACT US</ContactUsHead>
            <SocialMediaContainer>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaItem>
            </SocialMediaContainer>
            <ContactText darkTheme={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </SidebarContactContainer>
        </SideBarDesktop>
      )
    }}
  </WatchContext.Consumer>
)

export default SideBar
