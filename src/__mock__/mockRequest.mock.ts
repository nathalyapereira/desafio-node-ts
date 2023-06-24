import { Params } from "express-serve-static-core"
import { Request, Response, json } from "express"


export const makeMockRequest = ({params, query}: {params?: Params, query?: Params}): Request => {
    const request = {
        params: params || {},
        query: query || {}
    } as unknown
    return request as Request
}
