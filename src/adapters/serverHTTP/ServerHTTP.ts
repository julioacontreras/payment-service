import { UseCaseRoute, UseCaseMap, UseCaseName } from './types'

export interface ServerHTTP {
    useCases: UseCaseMap
    add: (useCaseName: UseCaseName, settings: UseCaseRoute) => void
    run: () => void    
}
