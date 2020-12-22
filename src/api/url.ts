import { each, entries, set } from 'lodash';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const endpoints = {
  todos: `/todos`,
  albums: '/albums',
  photos: '/photos',
  comments: '/comments',
  posts: '/posts',
  users: '/users',
};

export const url = { ...endpoints };

each(entries(endpoints), ([key, path]) => set(url, key, `${BASE_URL}${path}`));

export default url;
