import Hue from './Hue'
import PostHue from './PostHue'

interface HueObject {
    color: string,
    username: string,
    likes: number
}
interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-col gap-y-16'>
      <div className='flex justify-between mx-10 mt-5 gap-8'>
        <h1 className='text-5xl bg-gradient-to-r from-red-600 via-amber-500 to-violet-400 text-transparent bg-clip-text font-bold tracking-widest'>
          HUEGRAM
        </h1>
        <div className='flex items-center gap-x-3'>
          <i className="fa-solid fa-magnifying-glass text-white text-2xl"></i>
          <input className='bg-transparent border-2 rounded-full text-lg text-white px-4 py-2' type="text" name="search" id="search"/>
        </div>
        
      </div>
      
      <div className="border-b-2"><PostHue addHue={props.addHue} /></div>

      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>
          {props.hues.map(  (hue) => ( 
              
              <Hue hue={hue}/>
        ))}
      </div>

        

    </div>
  )
}

export default Main