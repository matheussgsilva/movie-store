import * as C from './styles'

const Skeleton = () => {
  return (
    <C.Container>
      <C.ContentArea>
        <C.PosterArea />
        <C.InfoArea>
          <C.InfoText />
          <C.InfoText />
          <C.InfoText />
        </C.InfoArea>
      </C.ContentArea>
      <C.ButtonArea />
    </C.Container>
  )
}

export default Skeleton