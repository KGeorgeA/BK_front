import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCommentThunk } from "../../redux/comments/commentThunk";
import { IAddComment } from "../../types/comment/comment.types";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import Comment from "./Comment";
import { CommentSection } from "./CommentSection.styles";

function Comments() {
  const dispatch = useDispatch();
  const params = useParams();

  const { comments } = useAppSelector((state) => state.commentsData);
  const { isSignIn } = useAppSelector((state) => state.userAuth);
  const [commentInput, setCommentInput] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    setDisabled(!commentInput.length || !isSignIn);
  }, [commentInput, isSignIn]);

  useEffect(() => {}, [comments]);

  const handleCommentInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setCommentInput(ev.target.value);
  };

  const handleSendComment: React.MouseEventHandler<HTMLButtonElement> = () => {
    const comment: IAddComment = {
      userComment: commentInput,
      bookId: Number(params.id),
    };

    setCommentInput("");
    dispatch(addCommentThunk(comment));
  };

  return (
    <CommentSection>
      <div>
        <TextField onChange={handleCommentInputChange} value={commentInput} />
        <Button disabled={disabled} onClick={handleSendComment}>
          Отправить
        </Button>
      </div>
      <div>
        {comments ? (
          comments.length ? (
            comments.map((item, index) => (
              <Comment key={index} comment={item}></Comment>
            ))
          ) : (
            <div>Будьте первым, кто оставит отзыв</div>
          )
        ) : (
          <div>Будьте первым, кто оставит отзыв</div>
        )}
      </div>
    </CommentSection>
  );
}

export default Comments;
