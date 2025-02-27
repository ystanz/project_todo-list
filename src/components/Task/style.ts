import styled from 'styled-components'
import variables from '../../styles/variables'

type TagProps = {
  priority?: string
  status?: string
}

function returnBackgroundColor(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'Pendente') return variables.yellow
    if (props.status === 'Concluída') return variables.green
  } else if ('priority' in props) {
    if (props.priority === 'Urgente') return variables.red
    if (props.priority === 'Importante') return variables.yellow2
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  margin-right: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  display: inline-block;
`

export const Description = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`
export const RemoveCancelButton = styled(Button)`
  background-color: ${variables.red};
`
