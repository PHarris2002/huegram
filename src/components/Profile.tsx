// import React from 'react'
// import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center justify-evenly text-white'>

        {/* <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div> */}

        <div className="saved-hues-grid flex flex-col">
          <h1 className="text-center">@kodom</h1>
          <div className="flex">
            <div className="border-y-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-y-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-y-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-y-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-2 h-5 w-5">
            </div>
          </div>
          <div className="flex">
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-x-2 border-b-2 h-5 w-5">
            </div>
          </div>
          <div className="flex">
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-x-2 border-b-2 h-5 w-5">
            </div>
          </div>
          <div className="flex">
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-x-2 border-b-2 h-5 w-5">
            </div>
          </div>
          <div className="flex">
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-b-2 border-l-2 h-5 w-5">
            </div>
            <div className="border-2 h-5 w-5">
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