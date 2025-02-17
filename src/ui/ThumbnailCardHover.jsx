import {
  BookmarkSimple,
  Heart,
  SpeakerSimpleSlash,
} from '@phosphor-icons/react'
import { LabelWrapper } from '../components/main/mainSoon/style'
import { BarButton, IconButton } from '.'
import AgeLabel from './AgeLabel'
import styled from 'styled-components'
import { color, font } from '../styled/theme'
import { media } from '../styled/media'

// 카드 호버
export const HoverItemWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: ${color('gray', '80')};
  border-radius: 7px;
  z-index: 10;
  opacity: 0;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  .videoCont {
    width: 100%;
    height: 100%;
    .topCont {
      padding: 0 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
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
      .leftBtn {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
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
`

const ThumbnailCardHover = () => {
  return (
    <HoverItemWrap>
      <div className="videoCont">
        <video src=""></video>
        <div className="topCont">
          <img src="{logoUrl}" alt="{title}" />
          <IconButton
            className="b30"
            icon={<SpeakerSimpleSlash size={24} />}
            text="SpeakerSimpleSlash"
          />
        </div>
      </div>
      <div className="textCont">
        <div className="topBtn">
          <div className="leftBtn">
            <BarButton text="재생하기" width="100px" height="42px" />
            <IconButton
              icon={<BookmarkSimple size={24} />}
              text="BookmarkSimple"
            />
            <IconButton icon={<Heart size={24} />} text="Heart" />
            <IconButton
              icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
              text="모여보기"
            />
          </div>
          <IconButton
            icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
            text="info"
          />
        </div>
        <div className="textarea">
          <h2>title</h2>
          <LabelWrapper>
            <AgeLabel text="12+" />
            <em>·</em>
            <span>year</span>
            <em>·</em>
            <span>액션</span>
            <em>·</em>
            <span>SF</span>
            <em>·</em>
            <span>해외영화</span>
          </LabelWrapper>
          <p>desc</p>
        </div>
      </div>
    </HoverItemWrap>
  )
}

export default ThumbnailCardHover
