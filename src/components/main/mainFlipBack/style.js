import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { media } from '../../../styled/media'

//cont
export const FlipBackSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0;
  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0;
  }
`

///////////////////////////////////////////////////////
//list
export const FlipBackListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`
export const FlipBackHeader = styled.div`
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
`

export const FlipBackList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  .swiper {
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
`

///////////////////////////////////////////////
//item

export const FlipBackItemCont = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  width: 100%;
  /* height: 100%; */
  aspect-ratio: 2 / 3.5;
`

export const ImageCont = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    background: ${color('gray', '80')};
    display: block;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }

    ${media.mobile} {
      border-radius: 5px;
    }
    transition: transform 0.6s ease;
  }
`
