import { useParams } from "react-router-dom";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../redux/api/postsApi";
import PostDetail from "../components/PostDetail";
import { useState } from "react";
import { PostType } from "../types/PostType";

const PostsPage = () => {
  const { id } = useParams();
  const { data: posts, error, isLoading } = useGetPostsQuery(id ? id : "");
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [createPost, { error: errorMsg }] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const handleCreatePost = async () => {
    if (postBody && postTitle) {
      const post = {
        userId: id ? parseInt(id) : 0,
        title: postTitle,
        body: postBody,
      };
      createPost(post as PostType);
    }
  };

  const handleDeletePost = async (post: PostType) => {
    await deletePost(post);
  };

  const handleUpdatePost = async (post: PostType) => {
    await updatePost(post);
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 min-h-screen bg-[rgb(243,245,247)]">
      <section className="text-2xl flex flex-col gap-5">
        <p className="text-center">Create post</p>
        <input
          type="text"
          className="outline-none text-lg p-3 w-96 rounded-md"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <input
          type="text"
          className="outline-none text-lg p-3 w-96 rounded-md"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        {(!postTitle || !postBody) && (
          <h1 className="text-xl text-center text-red-500">
            Fill inputs to create a post
          </h1>
        )}
        <button
          className="hover:text-[rgb(243,245,247)] transition-colors text-white bg-[rgb(75,117,226)] hover:bg-[rgb(119,149,226)] p-2 max-w-max rounded-sm"
          onClick={handleCreatePost}
        >
          Submit
        </button>
        {errorMsg && (
          <h1 className="text-3xl font-bold text-red-500">
            Creating post error
          </h1>
        )}
      </section>
      <section className="flex flex-col gap-5">
        {isLoading && <h1 className="text-3xl font-bold">Loading...</h1>}
        {error && (
          <h1 className="text-3xl font-bold text-red-500">
            Getting posts error
          </h1>
        )}
        {posts?.map((post) => (
          <PostDetail
            key={post.id}
            post={post}
            deletePost={handleDeletePost}
            updatePost={handleUpdatePost}
          />
        ))}
      </section>
    </div>
  );
};

export default PostsPage;
