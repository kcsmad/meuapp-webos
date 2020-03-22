import React, { useState, useEffect } from 'react';
import VideoThumb from '../components/video-thumb';

import './vertical-list.scss'

type Item = {
  title: string
  thumbnail: string,
  video: string,
  anime: string,
}

type Props = {
  startIndex?: number,
  items: Item[],
  onSelectedItem?: Function,
}


const VerticalList = ({ startIndex = 0, items , onSelectedItem }: Props) => {
  const [activeIndex, setActiveIndex] = useState(startIndex || 0);

  const onKeyDown = (event: KeyboardEvent): void => {
    event.stopPropagation()

    switch(event.code) {
      case 'ArrowUp':
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
        break;
      case 'ArrowDown':
        setActiveIndex(activeIndex >= items.length - 1 ? items.length - 1 : activeIndex + 1);
        break;

      default: break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, true);

    return function cleanDOM() {
      document.removeEventListener('keydown', onKeyDown, true)
    }
  })

  useEffect(() => {
    if (onSelectedItem) { onSelectedItem(items[activeIndex]) }
   }, [activeIndex]
  );

  return (
    <div className="vertical-list">
      { items.length > 0
        ? items.map((item, index) => (
          <VideoThumb
            hasFocus={activeIndex === index}
            key={`${index}-${item.title}`}
            translationValue={activeIndex * 280}
            {...item}
          />
        ))
        : <p>Nenhum item para exibir</p>
      }
    </div>
  )
}

export default VerticalList
