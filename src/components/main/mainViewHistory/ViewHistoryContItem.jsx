import { IconButton } from '../../../ui'
import { Info, Play } from '@phosphor-icons/react'
import { InfoCont, StateBar, ViewHistoryItemCont } from './style'
import { Link } from 'react-router-dom'

const ViewHistoryContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const desc = content.overview
  const title = content.title
  return (
    <ViewHistoryItemCont {...props}>
      <div className="thumbnailCont">
        <img src={`${bgurl}${content.backdrop_path}`} alt={title} />

        <div className="icon">
          <Link to={`/movie/${content.id}`}>
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </Link>
        </div>
        <StateBar></StateBar>
      </div>
      <InfoCont>
        <div className="textarea">
          <h2>{title}</h2>
          <span>{desc}</span>
        </div>
        <Link to={`/movie/${content.id}`}>
          <IconButton className="none" icon={<Info size={24} />} text="Info" />
        </Link>
      </InfoCont>
    </ViewHistoryItemCont>
  )
}

export default ViewHistoryContItem
