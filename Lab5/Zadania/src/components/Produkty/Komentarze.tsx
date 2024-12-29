import { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Post {
  id: number;
  postId: number;
  likes: number;
  body: string;
}

function Komentarze() {
  const [comments, setComments] = useState<{ user: User; post: Post }[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((resp) => {
        if (!resp.ok) {
          console.error("Response not ok");
        }
        return resp.json();
      })
      .then((data) => {
        const newComment = data.comments.map((comment: any) => ({
          user: {
            id: comment.user.id,
            username: comment.user.username,
            fullName: comment.user.fullName,
          },
          post: {
            id: comment.id,
            postId: comment.postId,
            likes: comment.likes,
            body: comment.body,
          },
        }));
        setComments(newComment);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <Komentarz user={comment.user} post={comment.post} />
      ))}
    </>
  );
}

export default Komentarze;
