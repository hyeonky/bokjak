import { useDispatch, useSelector } from 'react-redux'
import { detailActions } from '../../../store/modules/detailSlice'
import ViewHistoryContItem from './ViewHistoryContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import { ViewHistoryContainer } from './style'
import { NavigationButton } from '../style'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const ViewHistoryContList = () => {
  const { movies } = useSelector((state) => state.contentR)
  const { authed, user } = useSelector((state) => state.authR)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getTvShows())
  }, [dispatch])

  const showDetailModal = (type, id, genreId) => {
    dispatch(getContentDetail({ type, id }))
    dispatch(getContentByGenre({ type, genreId }))
  }
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }
  if (!authed) {
    return null
  }
  return (
    <ViewHistoryContainer>
      <div className="viewHeader">
        <h2>👀 시청기록</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </div>

      <div className="viewList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            390: { slidesPerView: 2.1, slidesPerGroup: 1, spaceBetween: 10 },

            768: { slidesPerView: 2.8, slidesPerGroup: 1, spaceBetween: 16 },
            1024: {
              slidesPerView: 4.2,
              slidesPerGroup: 4.2,
              spaceBetween: 24,
            },
          }}>
          {movies.map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{ previousLocation: location }}>
                <ViewHistoryContItem
                  content={content}
                  onClick={() => {
                    showDetailModal('movie', content.id, content.genre_ids)
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
    </ViewHistoryContainer>
  )
}

export default ViewHistoryContList
