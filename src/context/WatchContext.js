import React from 'react'

const WatchContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
  savedVideosList: [],
  //   toggleSaveVideo: () => {},
  save: false,
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default WatchContext
