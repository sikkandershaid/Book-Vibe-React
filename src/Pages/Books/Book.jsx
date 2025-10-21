import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Book = ({book}) => {
  const { bookId, bookName, author, image, tags, category, rating} = book;
  return (
    <Link to={`/book-details/${bookId}`} className='book-card'>
      <div className="image-part">
        <img src={image} alt="Book Thumbnail" />
      </div>
      <div className="bottom-content">
        <div className="tag-wrap">
          {tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)}
        </div>
        <h3 className='title'>{bookName}</h3>
        <p className='auther'>By: {author}</p>
        <div className="bottom-part">
          <p className='catagory'>{category}</p>
          <p className='rate'><span>{rating}</span><FaRegStar /></p>
        </div>
      </div>
    </Link>
  );
};

export default Book;