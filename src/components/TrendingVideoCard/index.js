import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  TrendingVideoCardItem,
  TrendingVideoImage,
  TrendingCardTextContainerSmall,
  TrendingChannelImage,
  TrendingVideoDescription,
  TrendingVideoTitle,
  TrendingViewsTimeContainer,
  TrendingText,
  TrendingCardTextContainerLarge,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const TrendingVideoCard = props => {
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
            <TrendingVideoCardItem>
              <TrendingVideoImage src={thumbnailUrl} alt="video thumbnail" />
              <TrendingCardTextContainerSmall>
                <TrendingChannelImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoDescription>
                  <TrendingVideoTitle darkTheme={darkTheme}>
                    {title}
                  </TrendingVideoTitle>
                  <TrendingViewsTimeContainer>
                    <TrendingText>{channel.name}</TrendingText>
                    <BsDot style={dotStyle} />
                    <TrendingText>{viewCount}</TrendingText>
                    <BsDot style={dotStyle} />
                    <TrendingText>{time}</TrendingText>
                  </TrendingViewsTimeContainer>
                </TrendingVideoDescription>
              </TrendingCardTextContainerSmall>
              <TrendingCardTextContainerLarge>
                <TrendingVideoTitle darkTheme={darkTheme}>
                  {title}
                </TrendingVideoTitle>
                <TrendingText>{channel.name}</TrendingText>
                <TrendingViewsTimeContainer>
                  <TrendingText>{viewCount}</TrendingText>
                  <BsDot style={dotStyle} />
                  <TrendingText>{time}</TrendingText>
                </TrendingViewsTimeContainer>
              </TrendingCardTextContainerLarge>
            </TrendingVideoCardItem>
          </Link>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideoCard
