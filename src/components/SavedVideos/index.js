import {AiTwotoneFire} from 'react-icons/ai'
import {
  SavedVideosBodyContainer,
  SavedVideosContainer,
  NoSearchResultsContainer,
  NotFoundHead,
  NotFoundImage,
  NotFoundText,
  SavedVideosListContainer,
  SavedHeadingContainer,
  SavedHeading,
  SavedIcon,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoCard from '../SavedVideoCard'
import WatchContext from '../../context/WatchContext'

const SavedVideos = () => {
  const renderFailureView = () => (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NoSearchResultsContainer>
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NotFoundHead darkTheme={darkTheme}>
              No saved videos found
            </NotFoundHead>
            <NotFoundText>
              You can save your videos while watching them
            </NotFoundText>
          </NoSearchResultsContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  const renderSavedVideosList = () => (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value
        const style = {
          width: '20px',
          height: '20px',
          color: '#ff0b37',
        }
        return (
          <>
            <SavedHeadingContainer darkTheme={darkTheme} data-testid="banner">
              <SavedIcon darkTheme={darkTheme}>
                <AiTwotoneFire style={style} />
              </SavedIcon>
              <SavedHeading darkTheme={darkTheme}>Saved Videos</SavedHeading>
            </SavedHeadingContainer>
            <SavedVideosListContainer>
              {savedVideosList.map(video => (
                <SavedVideoCard key={video.id} videoDetails={video} />
              ))}
            </SavedVideosListContainer>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  return (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value
        const listLength = savedVideosList.length === 0
        return (
          <>
            <Header />
            <SavedVideosBodyContainer>
              <SideBar />
              <SavedVideosContainer
                darkTheme={darkTheme}
                data-testid="savedVideos"
              >
                {listLength ? renderFailureView() : renderSavedVideosList()}
              </SavedVideosContainer>
            </SavedVideosBodyContainer>
          </>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default SavedVideos
