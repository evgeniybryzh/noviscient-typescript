import { url } from 'api';
import React, { FC } from 'react';
import { useFetch } from 'react-async';
import { PostType } from 'api';
import { ManagerViewPostsDOM } from './Posts.dom';

export const ManagerViewPosts: FC = () => {
  const { data, isLoading } = useFetch<PostType[]>(
    url.posts,
    {},
    { json: true }
  );

  return <ManagerViewPostsDOM loading={isLoading} posts={data} />;
};
