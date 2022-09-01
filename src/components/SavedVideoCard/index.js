import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  SavedVideoCardItem,
  SavedVideoImage,
  SavedCardTextContainerSmall,
  SavedChannelImage,
  SavedVideoDescription,
  SavedVideoTitle,
  SavedViewsTimeContainer,
  SavedText,
  SavedCardTextContainerLarge,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const time = formatDistanceToNowStrict(new Date(publishedAt), {
    addSuffix: true,
  })
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme, changeActiveMenu} = value
        const dotStyle = {
          width: '20px',
          height: '20px',
          color: '#94a3b8',
          marginRight: '5px',
          marginLeft: '5px',
        }
        const linkStyle = {
          textDecoration: 'none',
        }
        return (
          <Link
            to={`/videos/${id}`}
            style={linkStyle}
            onClick={() => changeActiveMenu('INITIAL')}
          >
            <SavedVideoCardItem>
              <SavedVideoImage src={thumbnailUrl} alt="video thumbnail" />
              <SavedCardTextContainerSmall>
                <SavedChannelImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <SavedVideoDescription>
                  <SavedVideoTitle darkTheme={darkTheme}>
                    {title}
                  </SavedVideoTitle>
                  <SavedViewsTimeContainer>
                    <SavedText>{channel.name}</SavedText>
                    <BsDot style={dotStyle} />
                    <SavedText>{viewCount}</SavedText>
                    <BsDot style={dotStyle} />
                    <SavedText>{time}</SavedText>
                  </SavedViewsTimeContainer>
                </SavedVideoDescription>
              </SavedCardTextContainerSmall>
              <SavedCardTextContainerLarge>
                <SavedVideoTitle darkTheme={darkTheme}>{title}</SavedVideoTitle>
                <SavedText>{channel.name}</SavedText>
                <SavedViewsTimeContainer>
                  <SavedText>{viewCount}</SavedText>
                  <BsDot style={dotStyle} />
                  <SavedText>{time}</SavedText>
                </SavedViewsTimeContainer>
              </SavedCardTextContainerLarge>
            </SavedVideoCardItem>
          </Link>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default SavedVideoCard
