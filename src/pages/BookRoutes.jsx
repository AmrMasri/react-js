import { Routes , Route} from "react-router-dom";
import {BookList} from './BookList';
import {Book} from './Book'
import {NewBook} from './NewBook'
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
    <BookLayout/>
    <Routes>
      <Route index element={<BookList />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
    </Routes>
    </>
  );
}
