import React,{useState, useEffect} from 'react';
import Book from './Book';
import "./books.css";

const Books = () => {

  const [booksData, setBooksData] = useState([]);

  useEffect(() =>{
    fetch('booksData.json')
    .then(res => res.json())
    .then(data => setBooksData(data));
  },[])
 


  return (
    <>
      <section className="books_section py-15">
        <h2 className='title'>Books</h2>
        <div className="books-wrap">
          {booksData.map((book, index) => <Book book={book} key={index}></Book>)}
        </div>
      </section>
    </>
  );
};

export default Books;