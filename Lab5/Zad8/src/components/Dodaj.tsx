import { useState } from "react";
import { ArticleData } from "./BlogPage";
import { useNavigate } from "react-router-dom";

function Dodaj() {
  const [NewArticleData, setNewArticleData] = useState({
    newTitle: "",
    newContent: "",
  });
  const navigate = useNavigate();

  function handleClick() {
    const articles: ArticleData[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );

    let maxIndex: number = -1;
    articles.forEach((article) => {
      if (maxIndex < article.id) {
        maxIndex = article.id;
      }
    });
    maxIndex++;

    let newArticle: ArticleData = {
      id: maxIndex,
      title: NewArticleData.newTitle,
      content: NewArticleData.newContent,
    };

    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));
    setNewArticleData({
      newTitle: "",
      newContent: "",
    });
    navigate("/blog");
  }

  function handleChange(item: any) {
    const { name, value } = item.target;
    setNewArticleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="main_class">
      <label>Title of new article:</label>
      <br />
      <input
        type="text"
        name="newTitle"
        placeholder="Input new title"
        value={NewArticleData.newTitle}
        onChange={handleChange}
      />
      <br />
      <label>Content of new article:</label>
      <br />
      <textarea
        placeholder="I want to talk about..."
        name="newContent"
        value={NewArticleData.newContent}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}

export default Dodaj;
