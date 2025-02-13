import styled from 'styled-components'
import { font } from '../../../styled/theme'
import TopContItem from './TopContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { media } from '../../../styled/media'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
// import { useDispatch } from 'react-redux'

const TopListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
  .topHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: ${font('title', 'xxlg')};
      ${media.tablet} {
        font-size: ${font('title', 'xlg')};
      }
      ${media.mobile} {
        font-size: ${font('title', 'lg')};
      }
    }
    h3 {
      font-size: ${font('body', 'sm')};
    }
  }
  .topList {
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 24px;
    .swiper {
      width: 100%;
      overflow: visible;
    }
    .swiper-slide {
      width: auto;
      /* width: clamp(140px, 100%, 300px); */
      height: auto;
      /* height: clamp(130px, 30vw, 295px); */
    }
  }
`

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;
`

const TopContList = () => {
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <TopListWrap>
      <div className="topHeader">
        <h2>title</h2>
        <h3>more</h3>
      </div>
      <div className="topList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            390: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
            1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
          }}>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
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
