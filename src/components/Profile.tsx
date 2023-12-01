import React from 'react'
import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center justify-evenly text-white'>

        <h1>@kodom</h1>

        <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>

          <div>
            <h1 className='text-5xl text-center'>86</h1>
            <h2>Likes Received</h2>
          </div>

          <div>
            <h1 className='text-5xl text-center'>47</h1>
            <h2>Hues Posted</h2>
          </div>


    </div>
  )
}

export default Profile