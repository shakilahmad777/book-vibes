import bannerImage from '../../../public/pngwing1.png'
export default function Banner() {
    return (
        <div className='flex justify-center flex-col-reverse sm:flex-row sm:justify-around p-10 sm:bg-[#EEEEEE] rounded-[1rem] md:rounded-[2rem] my-10 lg:min-h-dvh'>
            <div className="w-full justify-center md:w-2/5 h-auto sm:grid sm:justify-between sm:items-center">
                <h1 className='text-2xl lg:text-4xl font-bold md:tracking-wide leading-[1.5] sm:text-black'>Books to freshen up your bookshelf</h1>
                <div className="grid sm:flex">
                    <button className='btn my-10 md:my-0 bg-[#23BE0A] text-white md:p-7 lg:p-10 lg:text-xl border-0 md:animate-bounce'>View The List</button>
                </div>
            </div>
            <div className="flex justify-center mb-10 sm:mb-10">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    )
}
