function client(endpoint, customConfig = {}) {
  const config = {
    method: 'get',
    ...customConfig,
  }

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`
  return window.fetch(url, config).then(async resp => {
    const json = await resp.json()
    if (resp.ok) {
      return json
    }

    return Promise.reject(json)
  })
}

export {client}
