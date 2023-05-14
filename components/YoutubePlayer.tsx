'use client'
import React from 'react';
import Youtube from 'react-youtube';

function YoutubePlayer() {
  const opts = {
    playerVars: {
      start: 4, // 再生開始時間（秒）
      end: 6,
    }
  }

  return (
    <Youtube
      videoId="FlQLysOzMBc"
      opts={opts}
    />
  )
}

export default YoutubePlayer;
