import styled from 'styled-components'
import BokjakContList from './BokjakContList'
import { media } from '../../../styled/media'

const BokjakSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0 50px;
  ${media.tablet} {
    padding: 60px 0 40px;
  }
  ${media.mobile} {
    padding: 40px 0 20px;
  }
`

const BokjakCont = () => {
  return (
    <BokjakSection>
      <BokjakContList />
    </BokjakSection>
  )
}

export default BokjakCont
