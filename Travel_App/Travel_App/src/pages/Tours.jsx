import Card from '../components/Card'
import { tours } from '../db';

export default function Tours() {
  const data = [];
  for (let index = 0; index < tours.length; index++) {
    const element = tours[index];
    data.push(element);
  }
  
  return (
    <div className="p-12 rounded bg-lightGray backdrop-blur-sm bg-white/80">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Tours</h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div> 
      <div className=" mx-auto flex flex-wrap justify-evenly ">
        {data.length > 0 && data.map(data => <Card key={data.title} data={data} />)}
      </div>
    </div>

  )
}
