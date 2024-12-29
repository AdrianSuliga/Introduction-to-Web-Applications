import { useState } from "react";
import "./Produkty.css";
import like_un from "./resources/like_un.png";
import like_cl from "./resources/like_cl.png";
import dislike_un from "./resources/dislike_un.png";
import dislike_cl from "./resources/dislike_cl.png";

function Komentarz(props: any) {
  const [LikeSrc, setLikeSrc] = useState(like_un);
  const [DislikeSrc, setDislikeSrc] = useState(dislike_un);
  const [LikeCount, setLikeCount] = useState(Number(props.post.likes));

  function likeHandler() {
    if (DislikeSrc === dislike_cl) {
      setDislikeSrc(dislike_un);
      setLikeSrc(like_cl);
      setLikeCount(LikeCount + 2);
      return;
    }

    if (LikeSrc === like_un) {
      setLikeSrc(like_cl);
      setLikeCount(LikeCount + 1);
    } else {
      setLikeSrc(like_un);
      setLikeCount(LikeCount - 1);
    }
  }

  function dislikeHandler() {
    if (LikeSrc === like_cl) {
      setLikeSrc(like_un);
      setDislikeSrc(dislike_cl);
      setLikeCount(LikeCount - 2);
      return;
    }

    if (DislikeSrc === dislike_un) {
      setDislikeSrc(dislike_cl);
      setLikeCount(LikeCount - 1);
    } else {
      setDislikeSrc(dislike_un);
      setLikeCount(LikeCount + 1);
    }
  }

  return (
    <div id="ex_7_1" className="main_class">
      <div id="id_info">
        #{props.post.id}, #{props.post.postId}
      </div>
      <div id="user_info">
        #{props.user.id} {props.user.username} ({props.user.fullName})
      </div>
      <div id="comment_body">{props.post.body}</div>
      <div id="likes">
        <button
          id="like_button"
          style={{ backgroundImage: `url(${LikeSrc})` }}
          onClick={likeHandler}
        />
        <button
          id="dislike_button"
          style={{ backgroundImage: `url(${DislikeSrc})` }}
          onClick={dislikeHandler}
        />
        <p>{LikeCount}</p>
      </div>
    </div>
  );
}

export default Komentarz;
