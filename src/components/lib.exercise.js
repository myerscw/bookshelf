import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import {FaSpinner} from 'react-icons/fa'
import {keyframes} from '@emotion/core'

const variants = {
  primary: {
    color: colors.base,
    background: colors.indigo,
  },
  secondary: {
    color: colors.text,
    background: colors.gray,
  },
}

const Button = styled.button(({variant = 'primary'}) => ({
  padding: '.5rem 1rem',
  border: 0,
  borderRadius: '4px',
  ...variants[variant],
}))

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const Input = styled.input({
  borderRadius: '4px',
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: '.5rem .75rem',
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s ease-in-out infinite`,
})

export {CircleButton, Dialog, Button, FormGroup, Input, Spinner}
