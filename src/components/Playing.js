import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function Playing() {
  return (
    <div>
      <AudioPlayer className='player-music' src='' layout="stacked-reverse" />
    </div>
  )
}

export default Playing