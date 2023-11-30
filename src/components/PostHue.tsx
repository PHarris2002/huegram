import React, { useState } from 'react'
import kaylee from '/kaylee.jpg'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex md:flex-row justify-center flex-col py-4 mx-10 gap-x-10'>

        <div className='flex flex-col items-center self-center gap-y-12'>
            <input className='w-96 h-32 text-2xl p-2' type="text" name="hue" id="hue" onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className='flex justify-center items-center btn w-96 h-20 bg-gray-300 text-cyan-950 text-center rounded-md'><div>Post</div></a>
        </div>

        <div className="self-center"><Hue hue={ {color, username:"kaylee", likes:3}} /></div>

    </div>
  )
}

export default PostHue