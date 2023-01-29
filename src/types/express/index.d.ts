import {Item} from "../custom"

export {}

declare global {
    namespace Express {
        export interface Request {
            item?: Item
        }
    }
} 