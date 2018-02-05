//
// const apiUrl = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'
//
// let token = localStorage.token
//
// if (!token)ㅋ
//     token = localStorage.token = Math.random().toString(36).substr(-8)
//
// const headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': token
// }
//
// // Categories
// export const fetchCategories = () =>
//     fetch(`${apiUrl}/categories`, { headers })
//         .then(res => res.json())
//         .then(data => data.categories);
//
//


/**
 * post api
 */
import {ENV} from "../environment";

export function getCategoryPosts(category) {

    return fetch(`${ENV.api_url}/${category}/posts`, {headers: ENV.headers})
        .then((res) => res.json());

}

export function getPosts() {

    return fetch(`${ENV.api_url}/posts`, {headers: ENV.headers})
        .then((res) => res.json());

}
// 이거 추가했음 (0205 17:00)
export const fetchPost = id =>
    fetch(`${ENV.api_url}/posts/${id}`, {headers: ENV.headers})
        .then(res => res.json())
        .then(data => data);

// 얘는 works. comment/ post 동시에 쓸 수 있는 action creator 만드는
export function vote(id, vote) {

    return fetch(`${ENV.api_url}/posts/${id}`,
        {
            headers: ENV.headers,
            method: 'POST',
            body: JSON.stringify({option: vote})
        }
    )
        .then((res) => res.json());

}
//
// export function vote(id, option, type) {
//     const postData = { id: id, option: option };
//     return fetch(`${ENV.api_url}/${type}/${id}`,
//         {
//             headers: ENV.headers,
//             method: 'POST',
//             body: JSON.stringify(postData)
//         }
//     )
//         .then((res) => res.json())
//         .then(data => data);
// }

// export const vote = (id, option, type) => {
//     const postData = { id: id, option: option };
//     const url = `${apiUrl}/${type}/${id}`;
//     return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(postData),
//         headers
//     })
//         .then(res => res.json())
//         .then(data => data);
// }



export function addPost(body) {

    return fetch(`${ENV.api_url}/posts`,
        {
            headers: ENV.headers,
            method: 'POST',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}

export function editPost(body) {

    return fetch(`${ENV.api_url}/posts/${body.id}`,
        {
            headers: ENV.headers,
            method: 'PUT',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}


export function getComments(idPost) {

    return fetch(`${ENV.api_url}/posts/${idPost}/comments`, {headers: ENV.headers})
        .then((res) => res.json());

}



/**
 * comment api
 */
export function addComment(body) {

    return fetch(`${ENV.api_url}/comments`, {
        headers: ENV.headers,
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then((res) => res.json());

}

export function editComment(body, id) {

    return fetch(`${ENV.api_url}/comments/${id}`,
        {
            headers: ENV.headers,
            method: 'PUT',
            body: JSON.stringify(body)
        }
    )
        .then((res) => res.json());

}

export function deleteComment(id) {

    return fetch(`${ENV.api_url}/comments/${id}`,
        {
            headers: ENV.headers,
            method: 'DELETE'
        }
    )
        .then(res => {
            return id;
        });

}


export function deletePost(id) {

    return fetch(`${ENV.api_url}/posts/${id}`,
        {
            headers: ENV.headers,
            method: 'DELETE'
        }
    )
        .then(res => {
            return id;
        });

}


/**
 * category api
 */

export function getCategories() {

    return fetch(`${ENV.api_url}/categories`, {headers: ENV.headers})
        .then((res) => res.json());

}

