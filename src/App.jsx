import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookLIst";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<BookList />} />
        <Route path="/Books/:id" element={<Book />} />
        <Route path="/Books/new" element={<NewBook />} />
      </Routes>
    </>
  );
}

export default App;
