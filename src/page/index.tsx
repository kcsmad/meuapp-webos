import React, { useState, useEffect } from 'react'
import VerticalList from '../vertical-list';
import AnimeService from '../service/anime-service'
import YoutubePlayer from '../components/video-player/youtube-player';

import './land-page.scss'

type Item = {
  title: string
  thumbnail: string,
  video: string,
  anime: string,
}

const LandPage = () => {
  const [items, setItems] = useState([]);

  const [selectedItem, setSelectedItem] = useState({} as Item);

  useEffect(() => {
    AnimeService.getAnimes().then(
     data =>  {
       // @ts-ignore
       setItems(data as Item[])
     }
    )
  }, [])

  const onSelectedItem = (item: Item): void => (
    setSelectedItem(item)
  )

  return (
    <>
      <YoutubePlayer video={selectedItem?.video} />
      <VerticalList items={items} onSelectedItem={onSelectedItem} />
    </>
  )
}

export default LandPage
