import {Link} from 'react-router-dom'
import {
  GameCardContainer,
  GameImage,
  GameTitle,
  GameViewCount,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const GameCard = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gameDetails
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkTheme, changeActiveMenu} = value
        const linkStyle = {
          textDecoration: 'none',
        }
        return (
          <GameCardContainer>
            <Link
              to={`/videos/${id}`}
              style={linkStyle}
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle darkTheme={darkTheme}>{title}</GameTitle>
              <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
            </Link>
          </GameCardContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default GameCard
