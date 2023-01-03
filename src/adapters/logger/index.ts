import { Logger } from './types'

export let logger: Logger

export function setLogger (newLogger: Logger) {
  logger = newLogger
}
