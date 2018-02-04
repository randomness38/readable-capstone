import { schema } from 'normalizr';

export const post = new schema.Entity('posts');
export const category = new schema.Entity('categories');
export const comment = new schema.Entity('comments');

export const arrayOfPosts = new schema.Array(post);
export const arrayOfCategories = {categories: [category]};
export const arrayOfComments = new schema.Array(comment);
