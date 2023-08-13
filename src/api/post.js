class Post {
  async getPost(postId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const result = await response.json();
    return result;
  }
}

const postApi = new Post();
export { postApi };
