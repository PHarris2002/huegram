// import React from 'react'
// import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center justify-evenly text-white'>

        {/* <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div> */}

        <div>
          <h1>@kodom</h1>
          <div className="border-2 saved-hues-grid grid grid-cols-4 grid-rows-4 w-full aspect-square">

              <div className=" bg-red-600">
              </div>
              <div className=" bg-amber-500">
              </div>
              <div className=" bg-green-500">
              </div>
              <div className=" bg-teal-700">
              </div>


              <div className=" bg-purple-500">
              </div>
              <div className=" bg-teal-500">
              </div>
              <div className="">
              </div>
              <div className="">
              </div>


              <div className="">
              </div>
              <div className="">
              </div>
              <div className="">
              </div>
              <div className="">
              </div>


              <div className="">
              </div>
              <div className="">
              </div>
              <div className="">
              </div>
              <div className="">
              </div>
              
          </div>

        </div>
        
        <div className='flex items-end gap-x-2'>
          <i className='fa-regular fa-heart'></i>
          <div>
            <h1 className='text-5xl'>86</h1>
            <h2>Likes Received</h2>
          </div>
        </div>

          <div className='flex items-end gap-x-2'>
            <p className='font-bold'>#</p>
            <div>
              <h1 className='text-5xl'>47</h1>
              <h2>Hues Posted</h2>
            </div>
          </div>


    </div>
  )
}

export default Profile