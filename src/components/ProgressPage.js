import styled from "@emotion/styled"

const ProgressPage = styled.div`
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    #ffc500 ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 5px;
  z-index: 5;
`

export default ProgressPage
