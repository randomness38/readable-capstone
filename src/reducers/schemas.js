// import { schema } from 'normalizr';
//
// export const post = new schema.Entity('posts');
// export const category = new schema.Entity('categories');
// export const comment = new schema.Entity('comments');
//
// export const arrayOfPosts = new schema.Array(post);
// export const arrayOfCategory = new schema.Array(category);
// export const arrayOfComment = new schema.Array(comment);
import {schema} from 'normalizr';

export const COMMENT_SCHEMA = new schema.Entity('comments');
export const COMMENT_LIST_SCHEMA = new schema.Array(COMMENT_SCHEMA);

export const POST_SCHEMA = new schema.Entity('posts');
export const POST_LIST_SCHEMA = new schema.Array(POST_SCHEMA);
