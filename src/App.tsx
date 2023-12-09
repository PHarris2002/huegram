// import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import HueObject from './HueObject'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [currentUser] = useState({
    username: "PHarris",
    likes: 0,
    hues: [ {id: 1000, color:'#ffa510', username:"PHarris", likes: 15}]
  });

  useEffect(()=>
  {
    fetch('./sampleData.json')
    .then(res => res.json())
    .then(data => setHues(data))
  }, [])

  const addNewHue = (color:string ) => 
  {
      const newHue = {color, username: currentUser.username, id: hues.length+1, likes:0, isLiked: false};
      setHues( [newHue, ...hues] );
  }

  const toggleLikeForHue = (id?:number) => {
    const newHues = [...hues]
    const hue = newHues.find(h => h.id == id)
    if (hue){
      hue.isLiked = !hue?.isLiked;

      hue.isLiked ? hue.likes++ : hue.likes--;
    }
    
    setHues(newHues)
  }

  return (
    <div className='flex bg-gradient-to-b from-slate-800 to-slate-950 h-screen gap-x-10'>
      {/* <Menu /> */}

      <div className='w-11/12 overflow-y-auto'>
        <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue} />
      </div>

      <Profile hues={hues}/>
    </div>
  )
}

export default App
