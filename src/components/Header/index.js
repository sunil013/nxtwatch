import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
import 'reactjs-popup/dist/index.css'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import WatchContext from '../../context/WatchContext'

import {
  Navbar,
  NavLogo,
  NavIconsContainerMobile,
  NavIconItem,
  NavIconsContainerDesktop,
  ProfileImage,
  LogoutButton,
  PopupMsg,
  PopupButtonsContainer,
  PopupCloseButton,
  PopupConfirmButton,
  PopupMobileContainer,
  PopupMobileListItem,
  PopupMobileListContainer,
  ListItemText,
  MobilePopupButton,
  ThemeButton,
  PopupLogoutContainer,
} from './styledComponents'
import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme, toggleTheme, activeMenu, changeActiveMenu} = value
        const style = {
          width: '20px',
          height: '20px',
          color: darkTheme ? '#ffffff' : '#000000',
        }
        const mobilePopup = {
          width: '20px',
          height: '20px',
          color: '#7e858e',
        }
        const themeIcon = {
          width: '30px',
          height: '30px',
          color: darkTheme ? '#ffffff' : '#000000',
        }
        const iconColor = darkTheme ? '#424242' : '#7e858e'
        const iconActive = '#ff0b37'
        const onToggleTheme = () => {
          toggleTheme()
        }
        return (
          <Navbar darkTheme={darkTheme}>
            <Link to="/" className="link-style">
              <NavLogo
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <NavIconsContainerMobile>
              <NavIconItem>
                <ThemeButton
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  {darkTheme ? (
                    <FiSun style={style} />
                  ) : (
                    <FaMoon style={style} />
                  )}
                </ThemeButton>
              </NavIconItem>

              <Popup
                modal
                trigger={
                  <NavIconItem>
                    <GiHamburgerMenu style={style} />
                  </NavIconItem>
                }
                className="popup-content"
              >
                {close => (
                  <>
                    <PopupMobileContainer darkTheme={darkTheme}>
                      <MobilePopupButton type="button" onClick={() => close()}>
                        <GrFormClose style={mobilePopup} />
                      </MobilePopupButton>
                      <PopupMobileListContainer>
                        <Link to="/" className="link-style">
                          <PopupMobileListItem
                            darkTheme={darkTheme}
                            key="HOME"
                            isActive={activeMenu === activeMenuConstants.home}
                            onClick={() =>
                              changeActiveMenu(activeMenuConstants.home)
                            }
                          >
                            <AiFillHome
                              size={25}
                              color={
                                activeMenu === activeMenuConstants.home
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <ListItemText darkTheme={darkTheme}>
                              Home
                            </ListItemText>
                          </PopupMobileListItem>
                        </Link>
                        <Link to="/trending" className="link-style">
                          <PopupMobileListItem
                            darkTheme={darkTheme}
                            key="TRENDING"
                            isActive={
                              activeMenu === activeMenuConstants.trending
                            }
                            onClick={() =>
                              changeActiveMenu(activeMenuConstants.trending)
                            }
                          >
                            <AiTwotoneFire
                              size={25}
                              color={
                                activeMenu === activeMenuConstants.trending
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <ListItemText darkTheme={darkTheme}>
                              Trending
                            </ListItemText>
                          </PopupMobileListItem>
                        </Link>
                        <Link to="/gaming" className="link-style">
                          <PopupMobileListItem
                            darkTheme={darkTheme}
                            key="GAMING"
                            isActive={activeMenu === activeMenuConstants.gaming}
                            onClick={() =>
                              changeActiveMenu(activeMenuConstants.gaming)
                            }
                          >
                            <SiYoutubegaming
                              size={25}
                              color={
                                activeMenu === activeMenuConstants.gaming
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <ListItemText darkTheme={darkTheme}>
                              Gaming
                            </ListItemText>
                          </PopupMobileListItem>
                        </Link>
                        <Link to="/saved-videos" className="link-style">
                          <PopupMobileListItem
                            darkTheme={darkTheme}
                            key="SAVED_VIDEOS"
                            isActive={
                              activeMenu === activeMenuConstants.savedVideos
                            }
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
                            <ListItemText darkTheme={darkTheme}>
                              Saved videos
                            </ListItemText>
                          </PopupMobileListItem>
                        </Link>
                      </PopupMobileListContainer>
                    </PopupMobileContainer>
                  </>
                )}
              </Popup>
              {/* <LogoutPopup onClickLogout={onClickLogout} /> */}
              {/* <NavIconItem>
                <GiHamburgerMenu style={style} />
              </NavIconItem> */}

              <Popup
                modal
                trigger={
                  <NavIconItem>
                    <FiLogOut style={style} />
                  </NavIconItem>
                }
                className="logout-popup"
              >
                {close => (
                  <PopupLogoutContainer darkTheme={darkTheme}>
                    <PopupMsg>Are you sure, you want to logout</PopupMsg>
                    <PopupButtonsContainer>
                      <PopupCloseButton type="button" onClick={() => close()}>
                        Cancel
                      </PopupCloseButton>
                      <PopupConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </PopupConfirmButton>
                    </PopupButtonsContainer>
                  </PopupLogoutContainer>
                )}
              </Popup>

              {/* <NavIconItem onClick={onClickLogout}>
                <FiLogOut style={style} />
              </NavIconItem> */}
            </NavIconsContainerMobile>
            <NavIconsContainerDesktop>
              <NavIconItem>
                <ThemeButton
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  {darkTheme ? (
                    <FiSun style={themeIcon} />
                  ) : (
                    <FaMoon style={themeIcon} />
                  )}
                </ThemeButton>
              </NavIconItem>
              <NavIconItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavIconItem>
              <NavIconItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" darkTheme={darkTheme}>
                      Logout
                    </LogoutButton>
                  }
                  className="logout-popup"
                >
                  {close => (
                    <PopupLogoutContainer darkTheme={darkTheme}>
                      <PopupMsg>Are you sure, you want to logout</PopupMsg>
                      <PopupButtonsContainer>
                        <PopupCloseButton type="button" onClick={() => close()}>
                          Cancel
                        </PopupCloseButton>
                        <PopupConfirmButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupLogoutContainer>
                  )}
                </Popup>
              </NavIconItem>
            </NavIconsContainerDesktop>
          </Navbar>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default withRouter(Header)
