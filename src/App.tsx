import "./ex01";
import { Counter } from "./features/counter/Counter"
import {PostsList} from "./features/posts/PostsList"

export const App = () => <div>
    <h1>Hello Redux</h1>
    <Counter />
    <PostsList/>
</div>