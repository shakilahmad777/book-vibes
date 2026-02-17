
export default function Book({book}) {
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    
    return (
        <div className="p-5 grid justify-center grow-1 border-2 border-[#23BE0A]">
            <div className="">
                <img src={image} className="md:w-[220px] h-[260px] rotate-x-15 -rotate-y-30 rounded" alt="" />
            </div>
            <div className="">
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <p className="flex gap-10">
                    {tags.map(tag => <button className="btn">{tag}</button>)}
                </p>
                <section className="flex justify-between border-t-1 border-dashed mt-3 pt-3 sm:mt-15 md:mt-3">
                    <p>{category}</p>
                    <p>{rating} <span className='font-bold text-xl text-[#23BE0A]'>&#9957;</span></p>
                </section>
            </div>
        </div>
    )
}
