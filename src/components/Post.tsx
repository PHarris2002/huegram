// import React from "react";

interface Post {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  post: Post;
}

const Post = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.post.color }}
    >
      <div className="flex">
        <p className="text-white text-2xl opacity-80">{props.post.color}</p>
      </div>

      <div className="bg-black text-white flex w-full justify-center p-4 rounded-b-2xl">
        <p>{props.post.username}</p>
      </div>

    </div>
  );
};

export default Post;
