import { useNavigate } from "react-router-dom";

function ArticleLink(props: any) {
  const navigate = useNavigate();
  let tail = String(props.id);

  function handleClick() {
    navigate("/article/" + tail);
  }

  return (
    <div id="article_link" onClick={handleClick}>
      <h1>
        #{props.id} {props.title}
      </h1>
    </div>
  );
}

export default ArticleLink;
