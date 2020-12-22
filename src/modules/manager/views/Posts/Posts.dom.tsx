import React, { FC } from 'react';
import { PostType } from 'api';
import { Link, generatePath } from 'react-router-dom';
import { map } from 'lodash';
import { routes } from 'router';

interface Props {
  posts?: PostType[];
  loading?: boolean;
}
export const ManagerViewPostsDOM: FC<Props> = ({ posts, loading }) => {

  return (
    <div>
      <hr/>
      <code>{loading ? 'Laoding posts...' : 'Completed'}</code>
      <hr/>
      <ul>
        {map(posts, (post) => {
          return (
            <li key={post?.id}>
              <Link to={generatePath(routes.manager.POST, { pid: post?.id })}>
                <h4>{post?.title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
