import { useEffect, useState } from "react"
import BookCart from "../BookCart/BookCart";

export default function Books() {
    const [allBooks, setAllBooks] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        fetch("/booksData.json")
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
            });
    }, []);

    const handleShowBooks = () => {
        if (visibleCount === 6) {
            setVisibleCount(allBooks.length); // show the all books
        } else {
            setVisibleCount(6); // show the 6 books
        }
    };

    return (
        <div>
            <div className="text-center inset-shadow-2xs my-5 py-5">
                <h1 className="text-5xl">BOOKS</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                {allBooks.slice(0, visibleCount).map((book) => (
                    <BookCart key={book.bookId} book={book} />
                ))}
            </div>

            {allBooks.length > 6 && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleShowBooks}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        {visibleCount === 6 ? "Show More" : "Show Less"}
                    </button>
                </div>
            )}
        </div>
    );
}
