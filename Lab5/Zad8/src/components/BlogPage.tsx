import { Link } from "react-router-dom";
import ArticleLink from "./ArticleLink";
import "./home.css";

export interface ArticleData {
  id: number;
  title: string;
  content: string;
}

function BlogPage() {
  let articles: ArticleData[] = JSON.parse(
    localStorage.getItem("articles") || "[]"
  );

  let articleLinkTags = articles.map((art) => <ArticleLink data={art} />);

  return (
    <div id="blog_main">
      <h1>Welcome to my blog!</h1>
      {articleLinkTags}
      <Link id="add_button" to="/dodaj">
        Dodaj
      </Link>
    </div>
  );
}

export default BlogPage;
