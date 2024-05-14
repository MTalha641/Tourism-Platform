import { bookedTours } from "../db";

export default function ViewBookedTour() {

  console.log(window.location.href.split('id=')[1])

  const data = bookedTours[window.location.href.split('id=')[1]];
  return (

    <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover" src={data.image} alt="Product Image" />
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Booking Details</h2>
                    
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Details:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {data.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex mb-4 mt-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 dark:text-gray-300">{data.price}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Duration:</span>
                            <span className="text-gray-600 dark:text-gray-300">{data.duration}</span>
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Location:</span>
                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{data.location}</button>
                    </div>

                    <a href="/bookedtours" className='inline-flex  items-center w-max bg-primary rounded shadow h-10 px-8 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                        Back
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}
