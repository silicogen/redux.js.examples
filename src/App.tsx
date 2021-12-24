import "./ex01";
import { Counter } from "./features/counter/Counter"
import { PostsList } from "./features/posts/PostsList"
import { AddPostForm } from "./features/posts/AddPostForm"

export const App = () => <div>
    <h1>Hello Redux</h1>
    <Counter />
    <AddPostForm/>
    <PostsList />
</div>