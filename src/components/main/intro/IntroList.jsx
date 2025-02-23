import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { useDispatch, useSelector } from 'react-redux'
import IntroItem from './IntroItem'
import { IntroSliderCont } from './style'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'

const IntroList = () => {
  const { movies } = useSelector((state) => state.contentR)
  const dispatch = useDispatch()
  const location = useLocation()
  const intro = movies.slice(0, 7)

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getTvShows())
  }, [dispatch])

  const showDetailModal = (type, id, genreId) => {
    dispatch(getContentDetail({ type, id }))
    dispatch(getContentByGenre({ type, genreId }))
  }
  return (
    <IntroSliderCont>
      <Swiper
        className="swiper"
        modules={[Autoplay, EffectCreative]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            opacity: 1,
            translate: ['-80%', 0, -50],
            scale: 0.9,
          },
          next: {
            opacity: 0.9,
            translate: ['80%', 0, -100],
            scale: 1,
          },
        }}
        breakpoints={{
          390: { spaceBetween: 12 },
          768: { spaceBetween: 16 },
          1024: { spaceBetween: 24 },
        }}>
        {intro
          .filter((content) => content.overview?.trim() !== '')
          .map((content) => (
            <SwiperSlide key={content.id}>
              <Link
                to={`/movie/${content.id}`}
                state={{
                  previousLocation: location,
                }}>
                <IntroItem
                  content={content}
                  onClick={() => {
                    showDetailModal('movie', content.id, content.genre_ids)
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </IntroSliderCont>
  )
}

export default IntroList
