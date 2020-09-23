import styled from "@emotion/styled"

const Section = styled.section`
  margin-bottom: 60px;

  /* &:not(:last-of-type) {
    border-bottom: solid 4px #484848;
  } */
`
export default Section

export const SectionTopBreak = styled.div`
  display: block;
  margin: 60px 0;
  width: 100%;
  position: relative;
  text-align: center;
  height: 160px;
  font-size: 8rem;
  font-weight: 900;
  @media (min-width: 960px) {
    height: 200px;
    font-size: 10rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background-color: #e7e7e9;
    z-index: 2;
  }

  &::after {
    content: '${props => props.number}';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #f0f0f0;
    z-index: 1;
  }
`
