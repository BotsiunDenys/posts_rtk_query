import { useState } from "react";
import { PostType } from "../types/PostType";

interface Props {
  post: PostType;
  deletePost: (post: PostType) => void;
  updatePost: (post: PostType) => void;
}

const PostDetail = ({ post, deletePost, updatePost }: Props) => {
  const [isChanging, setIsChanging] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = () => {
    if (title && body) {
      const changedPost: PostType = {
        id: post.id,
        userId: post.userId,
        title,
        body,
      };
      updatePost(changedPost);
      setIsChanging(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg p-8 text-lg">
      {isChanging ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className=" border-2 w-full p-1 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className=" border-2 w-full p-1 rounded-md"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="p-1">{post.title}</p>
          <p className="p-1">{post.body}</p>
        </div>
      )}
      <div className="flex gap-3">
        {isChanging ? (
          <button
            className="hover:text-[rgb(243,245,247)] transition-colors text-white bg-[rgb(75,117,226)] hover:bg-[rgb(119,149,226)] p-2 max-w-max rounded-sm"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button  className="hover:text-[rgb(243,245,247)] transition-colors text-white bg-[rgb(75,117,226)] hover:bg-[rgb(119,149,226)] p-2 max-w-max rounded-sm" onClick={() => setIsChanging(true)}>Update</button>
        )}
        <button  className="hover:text-[rgb(243,245,247)] transition-colors text-white bg-red-500 hover:bg-red-600 p-2 max-w-max rounded-sm" onClick={() => deletePost(post)}>Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
