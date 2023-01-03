import { setLogger } from '@/adapters/logger'

const logger = {
  info (message: string) {
    console.info(message)
  },
  error (message: string) {
    console.error(`%c 💩 ${message}`, 'color: red')
  }
}

setLogger(logger)
