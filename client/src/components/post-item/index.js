import React from "react";
import { Card, CardContent, ListItem, Typography } from '@mui/material';

const PostItem = ({ post }) => {
  return (
    <ListItem>
      <Card raised sx={{
        width: '100%',
        height: '250px',
        boxShadow: 'none',
        borderTop: '1px solid #e7e7e7',
        borderBottom: '1px solid #e7e7e7'
      }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default PostItem;