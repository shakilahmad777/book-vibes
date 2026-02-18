import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utilitis/addToDB';
import Book from '../../components/Book/Book';
import { useLoaderData } from 'react-router';

export default function BooksList() {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [sort, setSort] = useState("")
    // const [wishBook, setWishBook] = useState([]);

    useEffect(() => {   //  this book added to listed component //
        const storedReadList = getStoredReadList();
        console.log('aiiii book de', storedReadList)
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log('aiiii book de int', storedReadListInt)
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        console.log('book filter', readBookList)
        setReadBook(readBookList);
    }, []);

    //  sort by pages and ratings   //
    const handleSort = (type) => {

        setSort(type);
        if (type === "Pages") {
            const sortByPages = [...readBook].sort((a, b) => a.totalPages - b.totalPages);
            setReadBook(sortByPages);
        }
        if (type === "Ratings") {
            const sortByPages = [...readBook].sort((a, b) => a.rating - b.rating);
            setReadBook(sortByPages);
        }

    }

    return (
        <div>
            <div className="text-center shadow-2xs my-5 py-5">
                <h1 className='text-5xl'>BOOKS</h1>
            </div>
            <details className="dropdown flex justify-center">
                <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </details>
            <div className="">
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1 </h2>
                        <div className="flex flex-wrap gap-5">
                            {
                                readBook.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <div className="flex flex-wrap gap-5">
                            {
                                readBook.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
