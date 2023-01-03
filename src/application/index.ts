import { serverHTTP } from '@/adapters/serverHTTP'

import { useRoutes } from './routes'

export function startApp () {
  useRoutes()
    
  serverHTTP.run()
}
