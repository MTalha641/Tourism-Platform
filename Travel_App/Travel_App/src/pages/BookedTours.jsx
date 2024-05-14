import Card from '../components/Card'
import { bookedTours } from '../db';

export default function BookedTours() {
  const data = [];
  for (let index = 0; index < bookedTours.length; index++) {
    const element = bookedTours[index];
    data.push(element);
  }
  
  return (
    <div className="p-12 rounded bg-lightGray backdrop-blur-sm bg-white/80">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Bookings</h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div className=" mx-auto flex flex-col flex-wrap justify-center items-center ">
        {data.length > 0 && data.map(data => <Card key={data.title} data={data} reference={'My Booking'} />)}
      </div>
    </div>

  )
}
