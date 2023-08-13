import React from 'react';
import { usePost } from './hook/usePost';

const Post = ({ postId }) => {
  const { item } = usePost({ postId });
  return (
    <div>
      <ul>
        <li>{item.title}</li>
      </ul>
    </div>
  );
};

export default Post;
