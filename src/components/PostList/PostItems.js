import React from 'react';

import Post from './Post';


const PostItems = () => {

    return (
        <div>
            <Post/>
        </div>
    );
}

export default PostItems;

//
// export default ({
//                     // todos,
//                     // onTodoClick
//                 }) => {
//     return (
//         <ul>
//             {/*{todos.map(todo =>*/}
//                 {/*<Todo key={todo.id}*/}
//                       {/*onClick={() => onTodoClick(todo.id)}*/}
//                       {/*{...todo}*/}
//                 {/*/>*/}
//             {/*)}*/}
//             <li>PostItems</li>
//         </ul>
//     );
// }
