const getWishListBook = () => {
  const wishListBookSTR = localStorage.getItem('wishlist');
  if(wishListBookSTR){
    return JSON.parse(wishListBookSTR)
  }else{
    return[];
  }
}

const addWishListDb = (id) =>{
  const wishListBookData = getWishListBook();

  if(wishListBookData.includes(id)){
    alert("you Book is already Exist")
  }else{
    wishListBookData.push(id);
    const data = JSON.stringify(wishListBookData);
    localStorage.setItem("wishlist", data)
  }
}

export{addWishListDb, getWishListBook};