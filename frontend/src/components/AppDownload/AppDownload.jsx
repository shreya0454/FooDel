import React, {useState} from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For a Better Experience Download <br /> FooDel App</p>
    <div className="app-download-platforms">
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
    </div>
  </div>
    )
}

export default AppDownload
