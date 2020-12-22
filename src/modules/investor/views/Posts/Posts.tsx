import { url } from 'api';
import React, { FC } from 'react';
import { useFetch } from 'react-async';
import { PostType } from 'api';
import { InvestorViewPostsDOM } from './Posts.dom';

export const InvestorViewPosts: FC = () => {
  const { data, isLoading } = useFetch<PostType[]>(
    url.posts,
    {},
    { json: true }
  );

  return <InvestorViewPostsDOM loading={isLoading} posts={data} />;
};
