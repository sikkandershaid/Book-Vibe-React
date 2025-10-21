import React from 'react';
import './readlist.css';
import { Link } from 'react-router';
import { IoLocationOutline, IoDocumentsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";



const ReadlListDetails = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating, publisher, yearOfPublishing, totalPages } = book;
  return (
    <>
      <div className='read-list-card'>
        <div className="image-wrap">
          <img src={image} alt="Image" />
        </div>

        <div className="list-text-part">
          <h3 className='title'>{bookName}</h3>
          <p className='author'>By : {author}</p>

          <div className="flex items-center gap-6">
            <div className="tag-wrap">
              <span className="tag-title">Tag</span>
              {tags.map((tag, index) => <span className="tag" key={index}># {tag}</span>)}
            </div>
            <p className="publishing-year"><IoLocationOutline className='icon' /> Year of Publishing: {yearOfPublishing}</p>
          </div>

          <div className="publisher-page-wrap">
            <p className='publisher'><HiOutlineUsers className='icon' /> Publisher: {publisher}</p>
            <p className='page'><IoDocumentsOutline className='icon' /> Page: {totalPages}</p>
          </div>

          <div className="bottom-btn-wrap">
            <span className='catagory'>Category: {category}</span>
            <span className='rating'>Rating: {rating}</span>
            <Link to={`/book-details/${bookId}`} className='view-details'>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadlListDetails;