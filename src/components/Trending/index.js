import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiTwotoneFire} from 'react-icons/ai'
import WatchContext from '../../context/WatchContext'

import {
  TrendingBodyContainer,
  TrendingVideosContainer,
  TrendingHeadingContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingVideosList,
  NoSearchResultsContainer,
  NotFoundImage,
  NotFoundHead,
  NotFoundText,
  NotFoundButton,
  LoaderContainer,
} from './styledComponents'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideos: [], activeTab: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      activeTab: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideos: updatedData,
        activeTab: apiStatusConstants.success,
      })
    } else {
      this.setState({
        activeTab: apiStatusConstants.failure,
      })
    }
  }

  onClickFailureRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
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
              {/* <TrendingVideosContainer darkTheme={darkTheme}> */}
              <TrendingHeadingContainer
                darkTheme={darkTheme}
                data-testid="banner"
              >
                <TrendingIcon darkTheme={darkTheme}>
                  <AiTwotoneFire style={style} />
                </TrendingIcon>
                <TrendingHeading darkTheme={darkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingHeadingContainer>
              <TrendingVideosList>
                {trendingVideos.map(video => (
                  <TrendingVideoCard key={video.id} videoDetails={video} />
                ))}
              </TrendingVideosList>
              {/* </TrendingVideosContainer> */}
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
        return this.renderTrendingVideos()
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
              <TrendingBodyContainer>
                <SideBar />
                <TrendingVideosContainer
                  darkTheme={darkTheme}
                  data-testid="trending"
                >
                  {this.renderActiveTab()}
                </TrendingVideosContainer>
              </TrendingBodyContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
