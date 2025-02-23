import TopContItem from './TopContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useEffect, useRef } from 'react'
import {
  getContentByGenre,
  getContentDetail,
  getTrending,
} from '../../../store/modules/getThunk'
import { useDispatch, useSelector } from 'react-redux'
import { TopListWrap } from './style'
import { NavigationButton } from '../style'
import { Link, useLocation } from 'react-router-dom'
import topData from '../../../assets/api/topData'

const TopContList = () => {
  const { trending } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()
  const trendTop = trending.slice(0, 10)
  useEffect(() => {
    dispatch(getTrending())
  }, [])

  const getTitle = () => {
    if (location.pathname.includes('/movie')) return '🎬 이번주 영화 TOP 10'
    if (location.pathname.includes('/drama')) return '📺 이번주 시리즈 TOP 10'
    return '🔥 이번주 인기작 TOP 10'
  }

  const showDetailModal = (type, id, genreId) => {
    dispatch(getContentDetail({ type, id }))
    dispatch(getContentByGenre({ type, genreId }))
  }
  const swiperRef = useRef()
  const goNext = () => swiperRef.current?.swiper.slideNext()
  const goPrev = () => swiperRef.current?.swiper.slidePrev()
  return (
    <TopListWrap>
      <div className="topHeader">
        <h2>{getTitle()}</h2>
      </div>
      <div className="topList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 2.3, slidesPerGroup: 1, spaceBetween: 10 },
            390: { slidesPerView: 2.3, slidesPerGroup: 1, spaceBetween: 10 },
            768: { slidesPerView: 3.2, slidesPerGroup: 1, spaceBetween: 16 },
            1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
          }}>
          {trendTop.map((content, index) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/trending/${content.id}`}
                state={{ previousLocation: location }}>
                <TopContItem
                  content={content}
                  index={index}
                  numberImg={topData[index]?.numberUrl}
                  onClick={() => {
                    showDetailModal('trending', content.id, content.genre_ids)
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
          <NavigationButton>
            <IconButton
              onClick={goPrev}
              className="b30"
              icon={<CaretLeft size={24} />}
              text="caretLeft"
            />
            <IconButton
              onClick={goNext}
              className="b30"
              icon={<CaretRight size={24} />}
              text="caretRight"
            />
          </NavigationButton>
        </Swiper>
      </div>
    </TopListWrap>
  )
}
export default TopContList
