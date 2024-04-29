import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

// props data came from homePage/index.jsx
const PostsWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  // get all the  post ( to show in the feed )
  const getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_Backend_URL}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    // console.log(data);
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id, // id of the post
            userId,
            firstName,
            lastName,
            description,
            productName,
            imgUrl,
            videoUrl,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              productName={productName}
              imgUrl={imgUrl}
              videoUrl={videoUrl}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
