import { command } from "./base"
import { setup } from "./score"

export {addRaw} from "./base"
export { generator as Score } from "./score"
export { generator as Target } from "./target"
export const Result = () => ({
    command: command(),
    setup: setup()
})