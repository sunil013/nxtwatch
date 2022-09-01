import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  VideoCardItem,
  ThumbnailImage,
  VideoDescriptionContainer,
  ChannelProfileImage,
  VideoTextContainer,
  VideoTitle,
  ChannelName,
  ViewsAndTimeContainer,
  ViewsText,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  //   console.log(formatDistanceToNow(new Date(2021, 8, 20)))
  const date = formatDistanceToNowStrict(new Date(publishedAt), {
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
          <VideoCardItem>
            <Link
              to={`/videos/${id}`}
              style={linkStyle}
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <ChannelProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoTextContainer>
                  <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndTimeContainer>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot style={dotStyle} />
                    <ViewsText>{date}</ViewsText>
                  </ViewsAndTimeContainer>
                </VideoTextContainer>
              </VideoDescriptionContainer>
            </Link>
          </VideoCardItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoCard
