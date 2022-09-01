import WatchContext from '../../context/WatchContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
  NotFoundBodyContainer,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => {
  const renderNotFound = () => (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NotFoundContainer darkTheme={darkTheme}>
            <NotFoundImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundHeading darkTheme={darkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundText darkTheme={darkTheme}>
              we are sorry, the page you requested could not be found.
            </NotFoundText>
          </NotFoundContainer>
        )
      }}
    </WatchContext.Consumer>
  )
  return (
    <>
      <Header />
      <NotFoundBodyContainer>
        <SideBar />
        {renderNotFound()}
      </NotFoundBodyContainer>
    </>
  )
}

export default NotFound
