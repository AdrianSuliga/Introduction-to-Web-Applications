import ArticleLink from "./ArticleLink";
import "./home.css";

interface ArticleData {
  id: number;
  title: string;
  content: string;
}

function BlogPage() {
  return (
    <div id="blog_main">
      <h1>Welcome to my blog!</h1>
      <ArticleLink
        id={0}
        title="In vehicula augue risus, non dignissim turpis aliquam. "
      />
      <ArticleLink
        id={1}
        title="Ut mattis urna est, ut convallis tellus ullamcorper. "
      />
      <ArticleLink
        id={2}
        title="Proin in porta mauris. Phasellus odio est, blandit. "
      />
      <ArticleLink
        id={3}
        title="Maecenas pretium maximus commodo. Praesent tristique ultricies scelerisque."
      />
    </div>
  );
}

export default BlogPage;
