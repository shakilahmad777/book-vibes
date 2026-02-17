const getStoredReadList = () => {
  //  stored localStorage getItem key of "read-list"    //
  const storedReadListSTR = localStorage.getItem("read-list");
  // console.log(typeof storedReadListSTR)
  if (storedReadListSTR) {
    const storedReadListParse = JSON.parse(storedReadListSTR);
    return storedReadListParse;
  } else {
    return [];
  }
};
const addToStoredReadDB = (id) => {
  //  stored localStorage setItem value of book ID    //
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
    alert("this book is already exied");
  } else {
    storedReadList.push(id);
    const storedReadListStringify = JSON.stringify(storedReadList);
    localStorage.setItem("read-list", storedReadListStringify);
  }
};  // stored read list end //

const getStoredWishList = () => {
    //  stored localStorage getItem key of "wish-list"  //
    const storedWishListSTR = localStorage.getItem("wish-list");
    if(storedWishListSTR) {
        const storedWishListParse = JSON.parse(storedWishListSTR);
        return storedWishListParse;
    }
    else {
        return [];
    }
}
const addToStoredWishListDB = (id) => {
    //  stored localStorage setItem value of book ID   //
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)) {
        alert("this book is already exied");
    }
    else {
        storedWishList.push(id);
        const storedWishListStringify = JSON.stringify(storedWishList);
        localStorage.setItem("wish-list", storedWishListStringify);
    }
}   //  stored wish list end   //

export { getStoredReadList, getStoredWishList, addToStoredReadDB, addToStoredWishListDB };
