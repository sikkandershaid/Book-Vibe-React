import { getStoredBook } from "./addToDb";

const stroedBookList = (loderData) => {
  const stroedBookData = getStoredBook(); 
  const convertedStroedBookData = stroedBookData.map(id => parseInt(id));
  const myReadList = loderData.filter(book =>
    convertedStroedBookData.includes(book.bookId)
  );
  return myReadList;
}

export { stroedBookList };
