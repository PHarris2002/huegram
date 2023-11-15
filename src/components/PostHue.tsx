import React, {useState} from 'react'
import kaylee from '/kaylee.jpg'

interface Props {
    addHue: (color:string) => void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

    return (
        <div className='flex p-4'>
            {/* <div className='w-1/6'>
                <img src={kaylee} alt="" className='rounded-full'/>
            </div> */}

            <div className='flex flex-col w-full p-4 gap-4' style={{backgroundColor: color}}>
                <input type="text" name="hue" id="hue" onChange={(event) => setColor(event.target.value)}/>
                <a href="#" onClick={ ()=> props.addHue(color)} className="btn bg-white text-cyan-900 text-center">Post</a>
            </div>
        </div>
    )
}

export default PostHue