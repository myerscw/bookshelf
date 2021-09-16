/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
import * as auth from 'auth-provider'
import {client} from './utils/api-client.exercise'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'
import {useAsync} from './utils/hooks'
import {FullPageSpinner} from './components/lib'
import * as colors from 'styles/colors'

async function getUser() {
  return auth.getToken().then(token => {
    if (token) {
      return client('me', {token}).then(data => data.user)
    }
  })
}

function App() {
  const {
    isIdle,
    isLoading,
    isError,
    setData,
    error,
    data: user,
    run,
  } = useAsync()

  async function login(credentials) {
    auth.login(credentials).then(u => setData(u))
  }

  async function register(credentials) {
    auth.register(credentials).then(u => setData(u))
  }

  async function logout() {
    auth.logout().then(() => setData(null))
  }

  React.useEffect(() => {
    run(getUser())
  }, [run, setData])

  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return (
      <div
        css={{
          color: colors.danger,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Uh oh... There's a problem. Try refreshing the app.</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return user ? (
    <AuthenticatedApp logout={logout} user={user} />
  ) : (
    <UnauthenticatedApp login={login} register={register} />
  )
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
