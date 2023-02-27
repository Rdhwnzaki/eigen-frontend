import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ListArticles from "./pages/list-articles";
import DetailArticles from "./pages/detail-articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/list-articles" />}
          replace="true"
        />
        <Route path="/list-articles" element={<ListArticles />} />
        <Route path="/detail-articles/:title" element={<DetailArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
