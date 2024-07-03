import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleForm from "./components/ArticleForm";
import ArticleDetail from "./components/ArticleDetail";
import ManagementPage from "./components/ManagementPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/management/create" element={<ArticleForm />} />
              <Route path="/management/edit/:id" element={<ArticleForm />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
