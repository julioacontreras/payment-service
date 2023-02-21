import HttpStatus from 'http-status'
export const statusHTTP = HttpStatus

import { ServerHTTP } from './ServerHTTP'

export let serverHTTP: ServerHTTP

export type HTTPMethods = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS'

export function setServerHTTP (newServer: ServerHTTP) {
  serverHTTP = newServer
}
