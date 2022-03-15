export interface IComments {
  comments: Array<IComment>;
}

export interface IComment {
  userId: number;
  userName: string;
  userSurname: string;
  userAvatarPath: string;
  commentId: number;
  parentId: number | null;
  userComment: string;
}

export interface IAddComment {
  userId?: IComment["userId"];
  parentId?: IComment["parentId"];
  userComment: IComment["userComment"];
  bookId: number;
}
