import { useEffect, useState } from 'react';
import { postApi } from '../api/post';

export const usePost = ({ postId }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const result = await postApi.getPost(postId);
      setItem(result);
    };
    fetchPost();
  }, [postId]);

  return { item };
};
