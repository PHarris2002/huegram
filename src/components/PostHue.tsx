import { useState } from 'react'
// import kaylee from '/kaylee.jpg'
import Hue from './Hue'


interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {
  const [currentUser] = useState({
    username: "PHarris",
    likes: 0,
    hues: [ {id:1000, color:'#ffa510', username:"PHarris", likes: 0, isLiked: false}]
  });

    const[color, setColor] = useState('')

  const maxLength = 7;

  return (
    <div className='flex flex-col md:flex-row lg:flex-col bg-slate-900 border-2 rounded-xl self-center justify-center py-4 px-10 gap-10'>

        <div className='flex flex-col items-center self-center gap-y-4'>
                <input maxLength={maxLength} className='border-2 bg-white bg-gradient-to-r from-red-600 via-amber-500 to-violet-400 text-transparent bg-clip-text w-3/4 h-1/2 text-3xl p-2 rounded-2xl' defaultValue="#" type="text" name="hue" id="hue" onChange={ (event) => {setColor(event.target.value)}} />
                <a href="#" onClick={ () => props.addHue(color)  } className='flex justify-center items-center btn w-3/4 h-1/2 bg-gradient-to-r from-red-600 via-amber-500 to-violet-400 text-white text-2xl font-bold text-center rounded-md'><div>Post</div></a>
        </div>

        <div className="self-center text-xl text-white h-5/6"><Hue hue={{id: 1000, color, username: currentUser.username, likes:currentUser.likes, isLiked: false}} /></div>

    </div>
  )
}

export default PostHue