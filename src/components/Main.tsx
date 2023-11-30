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
      <div className='flex justify-between mx-10'>
        <h1>
          HUEGRAM
        </h1>
        <div className='flex'>
          <input className='bg-transparent border-2 rounded-full text-lg text-white px-4 py-2' type="text" name="search" id="search"/>
        </div>
        
      </div>
      
      <div className=""><PostHue addHue={props.addHue} /></div>

      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>
          {props.hues.map(  (hue) => ( 
              
              <Hue hue={hue}/>
        ))}
       </div>

        

    </div>
  )
}

export default Main