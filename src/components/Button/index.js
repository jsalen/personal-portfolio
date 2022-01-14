import { Btn } from './styles'

export const Button = ({ children }) => {
  return (
    <Btn
      href='mailto:jsalen.91@gmail.com?subject=I+just+saw+your+portfolio'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </Btn>
  )
}
