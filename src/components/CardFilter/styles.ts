import styled from 'styled-components'
import { Props } from '.'

type PropsWhithoutCaptionAndCounter = Omit<Props, 'counter' | 'caption'>

export const Card = styled.div<PropsWhithoutCaptionAndCounter>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 28px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
