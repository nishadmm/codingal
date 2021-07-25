import React from "react";

const Post = ({ post: { title, body } }) => {
  return (
    <div className="p-3">
      <div className="bg-white rounded p-4 shadow">
        <div>
          <div>
            <h1 className="font-semibold">{title}</h1>
          </div>
        </div>
        <div className="py-4 text-sm">{body}</div>
        <div className="flex">
          <div className="w-3/4 h-2 rounded rounded-r-none bg-blue-400"></div>
          <div className="w-1/4 h-2 rounded rounded-l-none bg-blue-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
