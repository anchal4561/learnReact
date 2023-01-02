import React from "react";
const Post = ({data}) => {
  return (
    <div className="post">
      <h1>
        {data.title}
        {/* Here show the title of the post  */}
      </h1>
      <h3>
        {data.body}
        {/* Here show the body of the post  */}
      </h3>
    </div>
  );
};

export default Post;
