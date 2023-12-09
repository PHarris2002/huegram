import Hue from './Hue'
import PostHue from './PostHue'

import HueObject from "../HueObject"

interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike: (id?:number)=> void
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='self-center flex justify-between mt-5 pb-5 gap-8 w-11/12'>
        <h1 className='text-5xl bg-gradient-to-r from-red-600 via-amber-500 to-violet-400 text-transparent bg-clip-text font-bold tracking-widest'>
          HUEGRAM
        </h1>  
        <div className='flex items-center justify-end gap-x-3'>
            <i className="fa-solid fa-magnifying-glass text-white text-2xl"></i>
            <input className='bg-transparent border-2 rounded-full text-lg text-white px-5 py-2' type="text" name="search" id="search"/>
        </div>
      </div>
      
      <div className='flex flex-col justify-center lg:flex-row'>
        <div className='mb-8'>
          <PostHue addHue={props.addHue} />
        </div>

        <div className='flex flex-wrap justify-center xl:justify-end lg:w-2/3 gap-8'>
            {props.hues.map(  (hue) => ( 
                
                <Hue hue={hue} toggleLike={props.toggleLike}/>
          ))}
        </div>
      </div>


        

    </div>
  )
}

export default Main