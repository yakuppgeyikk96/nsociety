import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostList from "../../components/post-list";
import { getUserPosts } from "../../services/postService";
import { getItem } from "../../utils/localStorageHelper";

const HomePage = () => {
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const resData = await getUserPosts(userId);
    setPosts(resData);
  }

  useEffect(() => {
    setUserId(() => {
      return JSON.parse(getItem("user"))._id;
    })
  }, []);

  useEffect(() => {
    if (userId) getAllPosts();
  }, [userId]);
  return (
    <Box component="div">
      <PostList posts={posts} />
    </Box>
  )
}

export default HomePage;