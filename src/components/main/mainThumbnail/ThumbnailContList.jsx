import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getContentByGenre,
  getContentDetail,
  getMovies,
  getTvShows,
} from '../../../store/modules/getThunk'
import { Link, useLocation } from 'react-router-dom'
import { ThumbnailContainer, ThumbnailHeader, ThumbnailList } from './style'
import ThumbnailCard from '../../../ui/ThumbnailCard'
import { NavigationButton } from '../style'
import './style.css'

const ThumbnailContList = ({
  title,
  targetGenreId = null,
  isRandom = false,
}) => {
  const { movies, tvShows, trending } = useSelector((state) => state.contentR)
  const { currentContent } = useSelector((state) => state.detailR)
  const { authed } = useSelector((state) => state.authR)

  const dispatch = useDispatch()
  const location = useLocation()

  const [filteredContent, setFilteredContent] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth) // 화면 크기 업데이트
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize) // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const combinedContent = [
        ...movies.map((item) => ({ ...item, type: 'movie' })),
        ...tvShows.map((item) => ({ ...item, type: 'tv' })),
        ...trending.map((item) => ({ ...item, type: 'trend' })),
      ]

      let tempContent = combinedContent

      // 장르 필터링 적용
      if (targetGenreId) {
        tempContent = tempContent.filter((content) =>
          content.genre_ids.includes(targetGenreId)
        )
      }

      // 랜덤 정렬 적용 (Fisher-Yates 알고리즘)
      const shuffleArray = (array) => {
        const shuffled = [...array]
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
      }

      if (isRandom) {
        tempContent = shuffleArray(tempContent)
      }

      const MIN_ITEMS = 1 // 최소 12개 유지

      let thumnail = filteredContent.slice(0, MIN_ITEMS)

      // 데이터가 12개보다 부족하면 반복해서 채우기
      while (thumnail.length < MIN_ITEMS && filteredContent.length > 0) {
        thumnail = [...thumnail, ...filteredContent].slice(0, MIN_ITEMS)
      }

      setFilteredContent(tempContent)
      setIsLoading(false) // ✅ 로딩 완료 후 UI 업데이트
    }

    fetchData()
  }, [movies, tvShows, targetGenreId, isRandom])

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

  return (
    <ThumbnailContainer>
      <ThumbnailHeader>
        <h2>{title}</h2>
        <Link>
          <h3>더보기</h3>
        </Link>
      </ThumbnailHeader>
      {isLoading ? (
        <p>로딩 중...</p> // 로딩 표시 (원하는 UI로 변경 가능)
      ) : (
        <ThumbnailList>
          <Swiper
            className="swiper"
            ref={swiperRef}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              330: {
                slidesPerView: 2.8,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 3.1,
                slidesPerGroup: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4.2,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 5.1,
                slidesPerGroup: 5,
                spaceBetween: 24,
              },
            }}>
            {filteredContent
              .filter(
                (content) =>
                  !!content.logoImage &&
                  content.logoImage.trim() !== '' &&
                  !!content.overview &&
                  content.overview.trim() !== ''
              )
              .map((content) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={`${content.type}-${content.id}`}>
                  <Link
                    to={`/video/${content.id}`}
                    state={{ previousLocation: location }}>
                    <ThumbnailCard
                      content={content}
                      onClick={() => {
                        // 데스크탑이 아닐 때만 모달을 여는 함수 호출
                        if (windowWidth <= 1024) {
                          showDetailModal(
                            content.type,
                            content.id,
                            content.genre_ids
                          )
                        }
                      }}
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>

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
        </ThumbnailList>
      )}
    </ThumbnailContainer>
  )
}

export default ThumbnailContList
