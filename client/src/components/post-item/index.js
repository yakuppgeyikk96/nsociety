import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  Typography
} from '@mui/material';
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import moment from "moment/moment";
import { Box } from "@mui/system";

const PostItem = ({ post }) => {
  console.log(post);
  return (
    <ListItem>
      <Card raised sx={{
        width: '100%',
        boxShadow: 'none',
        border: '1px solid #e7e7e7'
      }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.user.userName}
            subheader={moment(post.createdAt).format('HH:mm, DD/MM/yyyy')}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.text}
            </Typography>
          </CardContent>
          <CardActions sx={{
            display: 'flex',
            marginInline: '2rem',
            justifyContent: 'space-between'
          }}>
            <IconButton aria-label="share">
              <ShareOutlinedIcon />
            </IconButton>
            <Box component="div">
              <IconButton aria-label="comment">
                <CommentOutlinedIcon />
              </IconButton>
              <IconButton aria-label="like">
                <FavoriteIcon />
              </IconButton>
            </Box>
          </CardActions>
        </CardActionArea>
      </Card>
    </ListItem>
  )
}

export default PostItem;