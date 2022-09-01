import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import WatchContext from '../../context/WatchContext'

import {
  GamingBodyContainer,
  GamesContainer,
  GamesHeadingContainer,
  GamesHeading,
  GamesIcon,
  GamesListContainer,
  LoaderContainer,
  NoSearchResultsContainer,
  NotFoundImage,
  NotFoundHead,
  NotFoundText,
  NotFoundButton,
} from './styledComponents'
import GameCard from '../GameCard'
import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamesList: [], activeTab: apiStatusConstants.initial}

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({
      activeTab: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        gamesList: updatedData,
        activeTab: apiStatusConstants.success,
      })
    } else {
      this.setState({
        activeTab: apiStatusConstants.failure,
      })
    }
  }

  onClickFailureRetry = () => {
    this.getGames()
  }

  renderGames = () => {
    const {gamesList} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          const style = {
            width: '20px',
            height: '20px',
            color: '#ff0b37',
          }
          return (
            <>
              {/* <GamesContainer darkTheme={darkTheme}> */}
              <GamesHeadingContainer darkTheme={darkTheme} data-testid="banner">
                <GamesIcon darkTheme={darkTheme}>
                  <SiYoutubegaming style={style} />
                </GamesIcon>
                <GamesHeading darkTheme={darkTheme}>Gaming</GamesHeading>
              </GamesHeadingContainer>
              <GamesListContainer>
                {gamesList.map(game => (
                  <GameCard key={game.id} gameDetails={game} />
                ))}
              </GamesListContainer>
              {/* </GamesContainer> */}
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NoSearchResultsContainer>
            <NotFoundImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <NotFoundHead darkTheme={darkTheme}>
              Oops! Something Went Wrong
            </NotFoundHead>
            <NotFoundText>
              We are having some trouble to complete your request. Please try
              again
            </NotFoundText>
            <NotFoundButton type="button" onClick={this.onClickFailureRetry}>
              Retry
            </NotFoundButton>
          </NoSearchResultsContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  renderActiveTab = () => {
    const {activeTab} = this.state

    switch (activeTab) {
      case apiStatusConstants.success:
        return this.renderGames()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <GamingBodyContainer>
                <SideBar />
                <GamesContainer darkTheme={darkTheme} data-testid="gaming">
                  {this.renderActiveTab()}
                </GamesContainer>
              </GamingBodyContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
