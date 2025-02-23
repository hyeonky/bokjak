import { BookmarkSimple, Heart } from '@phosphor-icons/react'
import { LabelWrapper } from '../components/main/mainSoon/style'
import { BarButton, Dimmed, IconButton } from '.'
import AgeLabel from './AgeLabel'
import styled from 'styled-components'
import { color, font } from '../styled/theme'
import { media } from '../styled/media'
import genres from '../assets/api/genreData'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/modules/authSlice'
import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getContentByGenre, getContentDetail } from '../store/modules/getThunk'
import { detailActions } from '../store/modules/detailSlice'

export const HoverItemWrap = styled.div`
  ${media.tablet} {
    display: none;
  }
  ${media.desktop} {
    position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    pointer-events: auto;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    flex: 1;
    background: ${color('gray', '80')};
    border-radius: 7px;
    z-index: 1000;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    pointer-events: auto;
    img {
      border-radius: 7px 7px 0 0;
    }

    &:hover {
      pointer-events: auto;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    }
    .imgCont {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      .topCont {
        position: absolute;
        bottom: 20px;
        left: 0;
        padding: 0 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          max-width: 50%;
          max-height: 60px;
          object-fit: contain;
          object-position: left;
          border-radius: 7px;
        }
      }
    }
    .textCont {
      padding: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .topBtn {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .info {
          img {
            width: 24px;
            height: 24px;
          }
        }
        .leftBtn {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .play {
            font-weight: bold;
            font-size: ${font('body', 'sm')};
          }
          .together {
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
      .textarea {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        h2 {
          font-weight: bold;
          font-size: ${font('title', 'xlg')};
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: ${font('body', 'sm')};
          font-weight: lighter;
          ${media.mobile} {
            font-size: ${font('body', 'xsm')};
          }
        }
      }
    }
  }
`
const CardHoverModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .msgBox {
    width: 390px;
    height: 150px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${color('gray', '80')};
    gap: 16px;
    border-radius: 7px;
    h2 {
      font-weight: bold;
      font-size: ${font('body', 'md')};
    }
    .btn {
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      width: 360px;
      height: 42px;
      font-weight: bold;
      border-radius: 7px;
      font-size: ${font('body', 'md')};
      color: ${color('gray', '0')};
      background: ${color('primary', 'default')};
    }
  }
`

const ThumbnailCardHover = ({ content, detailContent }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { type, id } = useParams()
  const { authed } = useSelector((state) => state.authR)
  const [isCardModalOpen, setIsCardModalOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const bgurl = `https://image.tmdb.org/t/p/original`
  const logoUrl = content?.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  const title = content.title
  const desc = content.overview
  const date = content?.release_date ?? ''
  const year = date ? date.split('-')[0] : '정보 없음'
  const genreNames =
    content.genre_ids
      ?.map((id) => {
        const genre = genres.find((genre) => genre.id === id) // 장르 데이터에서 id로 매칭
        return genre ? genre.name : null // 장르 이름 반환, 없으면 null
      })
      .filter(Boolean) // null, undefined 제거
      .join(' · ') || '장르 없음'

  const openModal = () => {
    setIsCardModalOpen(true)
  }
  const closeModal = () => {
    setIsCardModalOpen(false)
  }

  const onBookmarkBtnClick = () => {
    if (!authed) {
      openModal()
    } else {
      setIsBookmarked(!isBookmarked)
    }
  }
  const onLikeBtnClick = () => {
    if (!authed) {
      openModal()
    } else {
      setIsLiked(!isLiked)
      dispatch(authActions.setLiked({ type, id }))
    }
  }

  return (
    <>
      <HoverItemWrap className="cardHover">
        <div className="imgCont">
          <img src={`${bgurl}${content.backdrop_path}`} alt={title} />
          <div className="topCont">
            <img src={logoUrl} alt={title} />
          </div>
        </div>
        <div className="textCont">
          <div className="topBtn">
            <div className="leftBtn">
              <BarButton
                className="play"
                text="재생하기"
                width="100px"
                height="42px">
                <Link to={authed ? '/video' : '/login'} />
              </BarButton>

              <IconButton
                icon={
                  authed && isBookmarked ? (
                    <BookmarkSimple weight="fill" />
                  ) : (
                    <BookmarkSimple />
                  )
                }
                text="BookmarkSimple"
                onClick={onBookmarkBtnClick}
              />
              <IconButton
                icon={authed && isLiked ? <Heart weight="fill" /> : <Heart />}
                text="Heart"
                onClick={onLikeBtnClick}
              />
            </div>
            <IconButton
              className="info"
              icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/50a46ba90da58313ac29280fc31efeb7885fba5c/images/common/bokjak-icon-info.svg"
              text="info"
              onClick={() => dispatch(detailActions.showDetailModal())}
            />
          </div>
          <div className="textarea">
            <h2>{title}</h2>
            <LabelWrapper>
              <AgeLabel text="12+" />
              <em>·</em>
              <span>{year}</span>
              <em>·</em>
              <span>{genreNames}</span>
            </LabelWrapper>
            <p>{desc}</p>
          </div>
        </div>
      </HoverItemWrap>
      {isCardModalOpen && (
        <CardHoverModal onClose={closeModal}>
          <Dimmed zindex={11} className="dimmed-active">
            <div className="msgBox">
              <h2>로그인 후 이용해주세요!</h2>
              <button className="btn" onClick={() => navigate('/login')}>
                로그인
              </button>
            </div>
          </Dimmed>
        </CardHoverModal>
      )}
    </>
  )
}

export default ThumbnailCardHover
