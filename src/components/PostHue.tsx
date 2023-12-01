import { useState } from 'react'
// import kaylee from '/kaylee.jpg'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-row justify-center py-4 px-10 gap-10 h-52'>

        <div className='flex flex-col items-center self-center gap-y-4'>
            <input className='w-3/4 h-20 text-4xl p-2' type="text" name="hue" id="hue" onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className='flex justify-center items-center btn w-3/4 h-20 bg-gradient-to-r from-red-600 via-amber-500 to-violet-400 text-white text-2xl font-bold text-center rounded-md'><div>Post</div></a>
        </div>

        <div className="self-center text-xl text-white h-44"><Hue hue={ {color, username:"kaylee", likes:3}} /></div>

    </div>
  )
}

export default PostHue