import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { addToStoredDB } from '../../utilits/addToDb';
import { addWishListDb } from '../../utilits/addWishListDb';

const BookDetails = () => {
    const { pData } = useParams();
    const loderData = useLoaderData();
    const singleBook = loderData.find(book => String(book.bookId) === String(pData));
    const { bookName, review, image, bookId, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook || {};

    const handleMarkAsRead = id => {
        addToStoredDB(id)
    }

    const handleWishListBook = id => {
        addWishListDb(id);
    }

    return (
        <>
            <section className="book-details pb-15">
                <div className="col-span-6">
                    <div className="image-bg">
                        <img src={image} alt="Image" />
                    </div>
                </div>

                <div className="col-span-6">
                    <h2 className='book-title'>Book Name: {bookName}</h2>
                    <p className="author">By : {author}</p>
                    <p className="catagory">{category}</p>
                    <p className="review"><span className="start-text">Review : </span>{review}</p>
                    <div className="tag-wrap">
                        <span className="tag-title">Tag</span>
                        {tags.map((tag, index) => <span className="tag" key={index}># {tag}</span>)}
                    </div>
                    <div className="some-details-wrap">
                        <div className="details-item">
                            <p className="start-text">Number of Pages:</p>
                            <p className="start-text">Publisher:</p>
                            <p className="start-text">Year of Publishing:</p>
                            <p className="start-text">Rating: </p>
                        </div>

                        <div className="details-item">
                            <p className="text">{totalPages}</p>
                            <p className="text">{publisher}</p>
                            <p className="text">{yearOfPublishing}</p>
                            <p className="text">{rating}</p>
                        </div>

                    </div>
                    <div className="mt-6 flex gap-4">
                        <button className='btn-primary btn-bg-1' onClick={() => handleMarkAsRead(bookId)}>Mark As Read</button>
                        <button className='btn-primary btn-bg-2' onClick={() => handleWishListBook(bookId)}>Add To Wish List</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BookDetails;