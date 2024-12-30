import { useParams } from "react-router-dom";
import { ArticleData } from "./BlogPage";

function Article() {
  const { id } = useParams();
  const thisId = parseInt(id || "0", 10);
  const articles: readonly ArticleData[] = JSON.parse(
    localStorage.getItem("articles") || "[]"
  );

  const thisArticle: ArticleData = {
    id: -1,
    title: "",
    content: "",
  };

  articles.forEach((art) => {
    console.log(art.id, thisId, art.title);
    if (art.id === thisId) {
      thisArticle.id = art.id;
      thisArticle.title = art.title;
      thisArticle.content = art.content;
    }
  });

  if (thisArticle.id < 0) {
    return <></>;
  }

  return (
    <div className="main_class">
      <h1>
        #{thisArticle.id} {thisArticle.title}
      </h1>
      <p>{thisArticle.content}</p>
    </div>
  );
}

export default Article;
