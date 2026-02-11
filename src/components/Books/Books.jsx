import { useEffect, useState } from "react"
import BookCart from "../BookCart/BookCart";

export default function Books() {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })
    }, [])
    return (
        <div className=''>
            <div className="text-center inset-shadow-2xs my-5 py-5">
                <h1 className='text-5xl'>BOOKS</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                {
                    allBooks.map(book => <BookCart key={book.bookId} book={book}></BookCart>)
                }
            </div>
        </div>
    )
}
