import { Grid, Paper, Avatar } from "@mui/material";
import React from "react";

import { SERVER_PATH } from "../../constants/serverPath";
import { IComment } from "../../types/comment/comment.types";

export interface ICommentProps {
  comment: IComment;
}

function Comment(props: ICommentProps) {

  return (
    <Paper>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={
              props.comment.userAvatarPath
                ? `${SERVER_PATH}${props.comment.userAvatarPath}`
                : ""
            }
          />
        </Grid>
        <Grid item justifyContent="left" xs zeroMinWidth>
          <h4>
            {props.comment.userSurname} {props.comment.userName}
          </h4>
          <p>{props.comment.userComment}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Comment;
