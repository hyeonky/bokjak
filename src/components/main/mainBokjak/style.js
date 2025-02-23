import styled from 'styled-components'
import { media } from '../../../styled/media'
import { color, font } from '../../../styled/theme'

//cont
// const BokjakWrap = styled.div`
//   width: 100%;
// `

export const BokjakSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0 40px;
  ${media.tablet} {
    padding: 60px 0 30px;
  }
  ${media.mobile} {
    padding: 40px 0 20px;
  }
`

///////////////////////////////////////////////////////
// list
export const BokjakListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.tablet} {
    gap: 30px;
  }
  ${media.mobile} {
    gap: 20px;
  }
`

export const BokjakHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 16px;
  ${media.mobile} {
    gap: 10px;
  }
  .quesCont {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    h2 {
      font-weight: bold;
      font-size: ${font('title', 'xxlg')};
      ${media.tablet} {
        font-size: ${font('title', 'xlg')};
      }
      ${media.mobile} {
        font-size: ${font('title', 'lg')};
      }
    }
    .border {
      width: 24px;
      height: 24px;
      cursor: pointer;
      &:hover + .msgBox {
        opacity: 1;
        pointer-events: all;
      }
      ${media.mobile} {
        width: 18px;
        height: 18px;
        size: 14px;
      }
    }
    .msgBox {
      width: 100%;
      height: auto;
      background: ${color('gray', '70')};
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
      border-radius: 7px;
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -140%);
      z-index: 10;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      white-space: pre-wrap;
      .textarea {
        width: 100%;
        display: flex;
        text-align: left;
        font-weight: lighter;
        font-size: ${font('body', 'sm')};
        color: ${color('gray', '0')};
      }
      ${media.tablet} {
        transform: translate(-50%, -125%);
        font-size: ${font('body', 'xsm')};
      }
      ${media.mobile} {
        transform: translate(-50%, -115%);
        width: 100%;
        border-radius: 5px;
        .textarea {
          font-size: ${font('body', 'xsm')};
        }
      }
    }
  }
  h3 {
    color: ${color('gray', '40')};
    font-size: ${font('body', 'sm')};
  }
`

export const BokjakList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;

  .swiper {
    width: 100%;
    overflow: visible;
  }
  .swiper-slide {
    width: auto;
    height: auto;
  }
`

///////////////////////////////////////////
// item
export const BokjakItemCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  gap: 16px;
  ${media.tablet} {
    gap: 10px;
  }
`
export const ImgCont = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background: ${color('gray', '80')};
  border-radius: 999px;
  .logoImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    border-radius: 50%;
  }
`

export const TextCont = styled.div`
  text-align: center;
  width: 100%;
  h3 {
    max-height: 25.5px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: ${font('title', 'md')};
    ${media.tablet} {
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
  h4 {
    font-size: ${font('title', 'md')};
    color: ${color('gray', '40')};
    ${media.tablet} {
      font-size: ${font('body', 'md')};
    }
    ${media.mobile} {
      font-size: ${font('body', 'sm')};
    }
  }
`

/////////////////////////////////////////////////////
//modal
export const BokjakModalCont = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`
export const BokjakDetailCont = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: ${color('gray', '80')};
  border-radius: 7px;
  .detailTop {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    gap: 10px;
    .none {
      height: 32px;
    }
    .titleTxt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      h2 {
        font-weight: bold;
        font-size: ${font('title', 'lg')};
        white-space: break-spaces;
      }
      .subTitle {
        display: flex;
        flex-direction: row;
        gap: 10px;
        color: ${color('gray', '40')};
        font-size: ${font('body', 'sm')};
      }
    }
  }
  .detailMid {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    .imgBox {
      width: 100px;
      height: auto;
      img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
    .textarea {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: center;
      gap: 10px;
      h2 {
        font-weight: bold;
        font-size: ${font('body', 'sm')};
      }
      .enterDate {
        color: ${color('primary', 'default')};
        font-size: ${font('body', 'md')};
      }
      .category {
        display: flex;
        align-items: center;
        color: ${color('gray', '40')};
        font-size: ${font('body', 'sm')};
        em {
          margin: 0 5px;
        }
      }
    }
  }
  .detailBottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
