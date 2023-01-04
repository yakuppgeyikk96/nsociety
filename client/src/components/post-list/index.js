import React from "react";
import PostItem from "../post-item";
import { Box, List } from "@mui/material";

const PostList = ({ posts }) => {

  console.log(posts);

  return (
    <Box component="div">
      <List disablePadding dense>
        {
          posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))
        }
      </List>
    </Box>
  )
}

export default PostList;