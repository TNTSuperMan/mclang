import { command } from "./base"
import { setup } from "./score"

export {addRaw} from "./base"
export { generator as Score } from "./score"
export { generator as Target } from "./target"
export const OutResult = () => {
    console.log("#Setup")
    console.log(setup())
    console.log("#Main")
    console.log(command())
}