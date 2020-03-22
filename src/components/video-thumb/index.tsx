import React from 'react'
import './video-thumb.scss'

type Props = {
  hasFocus: boolean,
  title: string,
  thumbnail: string,
  anime: string,
  translationValue?: number,
}

const VideoThumb = ({ hasFocus, title, thumbnail, anime , translationValue = 0}: Props) => (
  <div
    style={{
      transform: `translateY(${-translationValue}px)`,
      msTransform: `translateY(${-translationValue}px)`,
      OTransform: `translateY(${-translationValue}px)`,
      WebkitTransform: `translateY(${-translationValue}px)`,
    }}
    className={`video-thumb ${hasFocus ? 'video-active' : ''}`}
  >
    <img className="video-thumb__thumb" alt={title} src={`${process.env.PUBLIC_URL}/images/${thumbnail}`} />
    <h4 className="video-thumb__anime">{`[${anime}]`}</h4>
    <h2 className="video-thumb__title">{title}</h2>
  </div>
);

export default VideoThumb
