
export default function Hero() {
  return (
    <div className='bg-[url(/bg1.jpg)] bg-no-repeat bg-cover bg-center relative z-10 pb-32 overflow-x-hidden' style={{ height: "85vh"}}>
        <div className="">
            <div className='lg:flex justify-between items-center px-3 pt-12 pb-12 '>
                <div className='lg:w-2/5 mx-auto p-6 rounded backdrop-blur-sm bg-white/80'>
                    <div>
                        <h2 className='xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold lg:leading-snug mb-5'>Its A Big World Out There, Go Explore</h2>
                        <p className='text-black text-lg leading-normal mb-8'>Conviently customize your weekend as per your schedule and enjoy the joy of freedom from any place of the world.</p>
                    </div>
                    <div className='flex flex-1 gap-5'>
                        <button onClick={() => window.location.href = "/tours"} className='bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary'>Get Exploring</button>
                        <button onClick={() => window.location.href = "/blog"} className='bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white cursor-pointer text-base hover:border hover:border-primary'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
