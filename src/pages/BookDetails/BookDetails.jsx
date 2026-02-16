import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredReadDB, addToStoredWishListDB } from '../../utilitis/addToDB'

export default function BookDetails() {
	const { id } = useParams()
	const bookId = parseInt(id)
	const data = useLoaderData()
	console.log(data)
	const singleBook = data.find(book => book.bookId === bookId);
	const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;
	const handleMarkAsReadList = (id) => {
		addToStoredReadDB(id)
		console.log('ami thik achi')
	}
	const handleWishList = (id) => {
		addToStoredWishListDB(id)
		console.log('ami thik achi')
	}
	return (
		// md:grid md:grid-cols-2 my-10
		<div className='md:grid md:grid-cols-2'>
			<div className="flex justify-center items-center">
				<img className='w-[300px  ] md:w-[425px] md:h-[564px] p-10 md:py-15 md:rotate-x-15 md:-rotate-y-30' src={image} alt="" />
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
				<p className="flex gap-5">
					<button className="btn bg-[#23BE0A]" onClick={() => handleMarkAsReadList(id)}>Mark as Read</button>
					<button className="btn bg-[#59C6D2]" onClick={() => handleWishList(id)}>WhishList</button>
				</p>
			</div>
		</div>
	)
}
