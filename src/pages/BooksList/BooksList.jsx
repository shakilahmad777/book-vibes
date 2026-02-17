import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utilitis/addToDB';
import Book from '../../components/Book/Book';
import { useLoaderData } from 'react-router';

export default function BooksList() {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
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
    
    return (
        <div>
            <div className="text-center shadow-2xs my-5 py-5">
                <h1 className='text-5xl'>BOOKS</h1>
            </div>
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
