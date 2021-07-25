// @ts-ignore
export const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  // baseURL: 'http://localhost:8080/api',
  timeout: 10000
})