import axios from 'axios'

const API_URL = 'http://api.kyrluk.ru/api/v1'

const clientApi = (method, url, params = {}) =>
  new Promise((resolve, reject) => {
    const requestPromise = axios({
      method,
      url: `${API_URL}/${url}`,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        ...params
      }
    })

    return requestPromise
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))
  })

export {
  clientApi
}
