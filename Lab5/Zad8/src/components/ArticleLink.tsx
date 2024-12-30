import { Link } from "react-router-dom";

function ArticleLink(props: any) {
  return (
    <Link to={"/article/" + props.data.id} id="article_link">
      <h1>
        #{props.data.id} {props.data.title}
      </h1>
    </Link>
  );
}

export default ArticleLink;
