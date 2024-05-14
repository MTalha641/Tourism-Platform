
export default function Card({data, reference}) {
  return (

    <div className="mx-2 my-12">
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={data.image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {data.price} for  {data.duration}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {data.location}</p>
                {
                    reference === 'My Booking' ? (
                        <a href="/view?id=1" className='inline-flex  items-center w-max bg-primary rounded shadow h-10 px-8 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                            View
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
        
                    ) : (

                        <a href="/checkout" className='inline-flex  items-center w-max bg-primary rounded shadow h-10 px-8 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                            Book
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    )
                }
            </div>
        </a>

    </div>
  )
}
