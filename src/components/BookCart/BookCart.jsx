import React from 'react'
import { Link } from 'react-router';

export default function BookCart({ book }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='shadow-2xl sm:flex md:block lg:block w-auto p-5 rounded text-bold'>
            <sectin className='sm:w-full my-5 flex justify-center'>
                <img src={image} className='md:w-[220px] h-[260px] rotate-x-15 -rotate-y-30 rounded' alt="" />
            </sectin>
            <section className='sm:w-full'>
                <article className='flex gap-15 sm:gap-10 my-10'>
                    {
                        tags.map((tags, index) => <button key={index} className='btn text-[#23BE0A]'>{tags}</button>)
                    }
                </article>
                <h2 className='sm:my-5 md:my-0 md:my-5'>{bookName}</h2>
                <p><small>By: {author}</small></p>
                <section className="flex justify-between border-t-1 border-dashed mt-3 pt-3 sm:mt-15 md:mt-3">
                    <p>{category}</p>
                    <p>{rating} <span className='font-bold text-xl text-[#23BE0A]'>&#9957;</span></p>
                </section>
                <section className='flex justify-center'>
                    <Link className="btn bg-[#23BE0A] text-white" to={`book/${bookId}`}>Show Details</Link>
                </section>
            </section>
        </div>
    )
}
