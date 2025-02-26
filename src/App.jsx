import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import Thinkers from "./pages/Thinkers";
import About from "./pages/About";
import NotFound from "./pages/404";
import Topics from "./pages/Topics";
import MinimalEditor from "./pages/Editor";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/thinkers" element={<Thinkers />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/topics" element={<Topics />} />
        <Route path="/editor" element={<MinimalEditor />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
