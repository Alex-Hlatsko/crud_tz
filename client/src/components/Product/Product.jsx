import React, { useState } from "react";
// import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Product = ({ data }) => {
    // const { user } = useSelector((state) => state.authReducer.authData);
    // const [liked, setLiked] = useState(data.likes.includes(user._id));
    // const [likes, setLikes] = useState(data.likes.length)

    
    // const handleLike = () => {
    //   likePost(data._id, user._id);
    //   setLiked((prev) => !prev);
    //   liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
    // };
  return (
    <>
    <div>Product</div>
    <h3>{data.title}</h3>
    <h3>{data.description}</h3>
    </>
  )
}

export default Product