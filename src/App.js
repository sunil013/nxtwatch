import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'
import WatchContext from './context/WatchContext'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideosList: [],
    activeMenu: activeMenuConstants.home,
    save: false,
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateSaveVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({save: !prev.save}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  //   toggleSaveVideo = videoDetails => {
  //     const {savedVideosList} = this.state
  //     const result = savedVideosList.find(
  //       eachVideo => eachVideo.id === videoDetails.id,
  //     )
  //     if (result === undefined) {
  //       this.setState(prevState => ({
  //         savedVideosList: [...prevState.savedVideosList, videoDetails],
  //       }))
  //     } else {
  //       const updatedList = savedVideosList.filter(
  //         videos => videos.id !== videoDetails.id,
  //       )
  //       this.setState({
  //         savedVideosList: updatedList,
  //       })
  //     }
  //   }

  render() {
    const {darkTheme, savedVideosList, activeMenu, save} = this.state
    return (
      <WatchContext.Provider
        value={{
          darkTheme,
          savedVideosList,
          activeMenu,
          save,
          toggleTheme: this.toggleTheme,
          changeActiveMenu: this.changeActiveMenu,
          addVideosToSavedVideos: this.addVideosToSavedVideos,
          updateSave: this.updateSave,
          updateSaveVideosList: this.updateSaveVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}
export default App
