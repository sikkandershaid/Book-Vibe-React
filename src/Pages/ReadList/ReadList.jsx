import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import Book from '../Books/Book';
import ReadListDetails from './ReadlListDetails';
import { FaChevronDown } from "react-icons/fa6";
import { getWishListBook } from '../../utilits/addWishListDb';
import { Helmet } from "@dr.pogodin/react-helmet";
import PagesToRead from '../PagesToRead/PagesToRead';
import { stroedBookList } from '../../utilits/storedBookList';



const ReadList = () => {
  const loaderData = useLoaderData();
  const [sort, setSort] = useState("");

  // ReadList==
  const [readList, setReadList] = useState([]);


  useEffect(() => {
    const myReadList = stroedBookList(loaderData); 
    setReadList(myReadList)
  }, [loaderData]);

  // WishList==
  const [wiselist, setWishList] = useState([]);
  useEffect(() => {
    const wishListData = getWishListBook();
    const convertedWishListData = wishListData.map(id => parseInt(id));
    const myWiseList = loaderData.filter(book => convertedWishListData.includes(book.bookId));
    setWishList(myWiseList)
  }, [loaderData])


  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sorted = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sorted);
      console.log(sorted);
    } else if (type === "rating") {
      const sorted = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sorted);
    }
  };



  return (
    <>
     

      <Helmet>
        <title>ReadList | Boi Poka</title>
      </Helmet>
      <section className='book-list-section'>
        <div className="title-part">
          <h2 className='title'>Books</h2>
        </div>

        <div className="dropdown-wrap">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn dropdown-btn m-1">Sort By: {sort ? sort : ""} <FaChevronDown /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={() => handleSort("pages")}>Pages</a></li>
              <li><a onClick={() => handleSort("rating")}>Rating</a></li>
            </ul>
          </div>
        </div>

        <Tabs className="py-[60px]">
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {readList.map(b => <ReadListDetails key={b.bookId} book={b} ></ReadListDetails>)}
          </TabPanel>
          <TabPanel>
            {wiselist.map(b => <ReadListDetails key={b.bookId} book={b}></ReadListDetails>)}
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default ReadList;