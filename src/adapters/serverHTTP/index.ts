import HttpStatus from 'http-status'
export const statusHTTP = HttpStatus

import { ServerHTTP } from './ServerHTTP'

export let serverHTTP: ServerHTTP

export function setServerHTTP (newServer: ServerHTTP) {
  serverHTTP = newServer
}
