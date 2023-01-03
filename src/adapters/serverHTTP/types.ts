export type UseCaseName = string

export type HTTPResponse = unknown;

export type HTTPReturn = {
    response: HTTPResponse,
    session?: unknown
    code: number
};

export type HTTPRequest = {
    command: UseCaseName;
    settings: {
        params: unknown
    };
}

/** @type UseCaseFunction
 *  Use case function. Here have use case instructions to be executed.
 *  
 */
export type UseCaseFunction = (settings: unknown) => Promise<HTTPReturn> | HTTPReturn;

/** @type UseCaseRoute
 *  Use case settings. Here have function and route to each use case.
 *  
 */
export type UseCaseRoute = { useCase: UseCaseFunction, route: string  }

/** @type UseCaseMap
 *  Contain use cases to execute in server. Each route hace one use case.
 *  
 */
export type UseCaseMap = Map<UseCaseName, UseCaseRoute>;


