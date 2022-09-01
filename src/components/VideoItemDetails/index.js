import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNowStrict} from 'date-fns'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoDetailsBodyContainer,
  VideoDetailsContainer,
  VideoPlayerContainer,
  VideoDetailsTitle,
  ViewsAndTimeContainer,
  ViewsText,
  NoSearchResultsContainer,
  NotFoundHead,
  NotFoundImage,
  NotFoundText,
  NotFoundButton,
  LoaderContainer,
  LikeAndViewsContainer,
  LikeDislikeSaveContainer,
  LikeContainer,
  //   LikeText,
  HorizontalLine,
  VideoTextContainer,
  ChannelImage,
  ChannelSubscribers,
  ChannelNameContainer,
  VideoDescription,
  LikeButton,
  SaveButton,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'
import WatchContext from '../../context/WatchContext'
import {ChannelName} from '../VideoCard/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    activeTab: apiStatusConstants.initial,
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      activeTab: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        description: fetchedData.video_details.description,
        id: fetchedData.video_details.id,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        title: fetchedData.video_details.title,
        publishedAt: fetchedData.video_details.published_at,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedData,
        activeTab: apiStatusConstants.success,
      })
    } else {
      this.setState({
        activeTab: apiStatusConstants.failure,
      })
    }
  }

  onClickLike = () => {
    const {like} = this.state
    if (like === false) {
      this.setState({
        like: true,
        disLike: false,
      })
    } else {
      this.setState({
        like: false,
      })
    }
  }

  onClickDislike = () => {
    const {disLike} = this.state
    if (disLike === false) {
      this.setState({
        disLike: true,
        like: false,
      })
    } else {
      this.setState({
        disLike: false,
      })
    }
  }

  onClickSave = () => {
    this.setState(prevState => ({
      save: !prevState.save,
    }))
  }

  onClickFailureRetry = () => {
    this.getVideoDetails()
  }

  renderVideoDetails = () => {
    const {videoDetails, like, disLike} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
      id,
    } = videoDetails
    // const saveButtonText = save ? 'Saved' : 'Save'
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme, updateSave, savedVideosList} = value
          const dotStyle = {
            width: '20px',
            height: '20px',
            color: '#94a3b8',
            marginRight: '5px',
            marginLeft: '5px',
          }
          const likeStyle = {
            width: '20px',
            height: '20px',
          }
          const present = savedVideosList.find(each => each.id === id)
          const saveIsActive = present !== undefined
          const saveText = present !== undefined ? 'Saved' : 'Save'
          const date = formatDistanceToNowStrict(new Date(publishedAt), {
            addSuffix: true,
          })
          return (
            <>
              {/* <VideoDetailsContainer darkTheme={darkTheme}> */}
              <VideoPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </VideoPlayerContainer>
              <VideoTextContainer>
                <VideoDetailsTitle darkTheme={darkTheme}>
                  {title}
                </VideoDetailsTitle>
                <LikeAndViewsContainer>
                  <ViewsAndTimeContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot style={dotStyle} />
                    <ViewsText>{date}</ViewsText>
                  </ViewsAndTimeContainer>
                  <LikeDislikeSaveContainer>
                    <LikeContainer>
                      <LikeButton
                        type="button"
                        onClick={this.onClickLike}
                        active={like}
                      >
                        <AiOutlineLike style={likeStyle} />
                        Like
                      </LikeButton>
                    </LikeContainer>
                    <LikeContainer>
                      <LikeButton
                        type="button"
                        active={disLike}
                        onClick={this.onClickDislike}
                      >
                        <AiOutlineDislike style={likeStyle} />
                        Dislike
                      </LikeButton>
                    </LikeContainer>
                    <LikeContainer>
                      <SaveButton
                        type="button"
                        active={saveIsActive}
                        onClick={() => updateSave(videoDetails)}
                      >
                        <BiListPlus style={likeStyle} />
                        {saveText}
                      </SaveButton>
                    </LikeContainer>
                  </LikeDislikeSaveContainer>
                </LikeAndViewsContainer>
                <HorizontalLine />
                <LikeContainer>
                  <ChannelImage
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelNameContainer>
                    <ChannelName darkTheme={darkTheme}>
                      {channel.name}
                    </ChannelName>
                    <ChannelSubscribers>
                      {channel.subscriberCount} subscribers
                    </ChannelSubscribers>
                  </ChannelNameContainer>
                </LikeContainer>
                <VideoDescription darkTheme={darkTheme}>
                  {description}
                </VideoDescription>
              </VideoTextContainer>
              {/* </VideoDetailsContainer> */}
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
              again.
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
        return this.renderVideoDetails()
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
              <VideoDetailsBodyContainer>
                <SideBar />
                <VideoDetailsContainer
                  darkTheme={darkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderActiveTab()}
                </VideoDetailsContainer>
              </VideoDetailsBodyContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
