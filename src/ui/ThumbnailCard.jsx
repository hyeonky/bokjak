import { useState } from 'react'
import ThumbnailCardHover from './ThumbnailCardHover'
import styled from 'styled-components'

// 카드
const ThumbItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const ThumbTopCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    object-position: center center;
  }
`

const ThumbnailCard = ({ content, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <ThumbItemWrap
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ThumbTopCont>
        <img src={`${bgurl}${content.poster_path}`} alt={title} />
        {/* {logoUrl && <img src={logoUrl} />} */}
      </ThumbTopCont>
      {isHovered && <ThumbnailCardHover />}
    </ThumbItemWrap>
  )
}

export default ThumbnailCard
