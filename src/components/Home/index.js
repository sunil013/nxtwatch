import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import WatchContext from '../../context/WatchContext'
import {
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BodyContainer,
  SearchInputContainer,
  SearchBox,
  SearchButton,
  BannerCloseButton,
  HomeContainer,
  VideosContainer,
  BannerTextContainer,
  BannerImageContainer,
  NoSearchResultsContainer,
  NotFoundImage,
  NotFoundHead,
  NotFoundText,
  NotFoundButton,
  LoaderContainer,
} from './styledComponents'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    displayBanner: true,
    activeTab: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      activeTab: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        activeTab: apiStatusConstants.success,
      })
    } else {
      this.setState({
        activeTab: apiStatusConstants.failure,
      })
    }
  }

  onClickClose = () => {
    this.setState({
      displayBanner: false,
    })
  }

  onClickSearchIcon = () => {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickFailureRetry = () => {
    this.getVideos()
  }

  renderBanner = () => {
    const style = {
      width: '25px',
      height: '25px',
    }
    return (
      <BannerContainer data-testid="banner">
        <BannerImageContainer>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerCloseButton
            type="button"
            onClick={this.onClickClose}
            data-testid="close"
          >
            <GrFormClose style={style} />
          </BannerCloseButton>
        </BannerImageContainer>
        <BannerTextContainer>
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerTextContainer>
      </BannerContainer>
    )
  }

  renderNoSearchResults = () => (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NoSearchResultsContainer>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NotFoundHead darkTheme={darkTheme}>
              No Search results found
            </NotFoundHead>
            <NotFoundText>
              Try different key words or remove search filter
            </NotFoundText>
            <NotFoundButton type="button" onClick={this.onClickSearchIcon}>
              Retry
            </NotFoundButton>
          </NoSearchResultsContainer>
        )
      }}
    </WatchContext.Consumer>
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

  renderVideos = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.renderNoSearchResults()
        ) : (
          <VideosContainer>
            {videosList.map(video => (
              <VideoCard videoDetails={video} key={video.id} />
            ))}
          </VideosContainer>
        )}
      </>
    )
  }

  renderSearchBox = () => {
    const style = {
      width: '20px',
      height: '20px',
    }
    const {searchInput} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <SearchInputContainer darkTheme={darkTheme}>
              <SearchBox
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <SearchButton
                type="button"
                onClick={this.onClickSearchIcon}
                data-testid="searchButton"
              >
                <BsSearch style={style} />
              </SearchButton>
            </SearchInputContainer>
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

  renderBodySection = () => {
    const {displayBanner} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <BodyContainer darkTheme={darkTheme} data-testid="home">
              {displayBanner && this.renderBanner()}
              {this.renderSearchBox()}
              {this.renderActiveTab()}
            </BodyContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderActiveTab = () => {
    const {activeTab} = this.state

    switch (activeTab) {
      case apiStatusConstants.success:
        return this.renderVideos()
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
      <>
        <Header />
        <HomeContainer>
          <SideBar />
          {this.renderBodySection()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
