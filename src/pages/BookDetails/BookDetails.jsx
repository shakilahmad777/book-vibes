import React from 'react'
import { useLoaderData, useParams } from 'react-router'

export default function BookDetails() {
	const { id } = useParams()
	const bookId = parseInt(id)
	const data = useLoaderData()
	console.log(data)
	const singleBook = data.find(book => book.bookId === bookId);
	const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;
	return (
		<div className='md:grid md:grid-cols-2 border border-2 my-10'>
			<div className="h-screen flex justify-center items-center">
				<img className='h-full p-10 md:py-15 md:rotate-x-15 md:-rotate-y-30' src={image} alt="" />
			</div>
			<div className="mx-10">
				<h1>{bookName}</h1>
				<p className=''>
					By: {author}
				</p>
				<p className='border-y-1 border-gray-200 py-3'>
					{category}
				</p>
				<p>
					Review: {review}
				</p>
				<p className=" flex gap-10">
					{tags.map((tags, index) => <button key={index} className='btn'>{tags}</button>)}
				</p>
				<p className="">Number of Page: {totalPages}</p>
				<p className="">Publisher: {publisher}</p>
				<p className="">Year of Publishing: {yearOfPublishing}</p>
				<p className="">Rating: {rating}</p>
			</div>
		</div>
	)
}
