import React from 'react';
import ReactDom from 'react-dom';
import { data } from './books';
import Book from './Book';
//CSS
import './index.css';

function BookList() {
  return (
    <section className='booklists'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
