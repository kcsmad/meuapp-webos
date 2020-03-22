import React from 'react';

import './video-player.scss'

type Props = {
  video: string
}

const YoutubePlayer = ({ video }: Props) => (
  <div className="video-player">
    <iframe
      width="800"
      height="720"
      src={`https://www.youtube.com/embed/${video}?autoplay=1`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
);

export default YoutubePlayer
