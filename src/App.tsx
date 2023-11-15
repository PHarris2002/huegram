import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, color: '#ffa500', username: "kaylee", likes: 15},
    {id: 2, color: '#ff8c00', username: "therealkaylee", likes: 8},
    {id: 3, color: '#ff7f50', username: "odomester", likes: 20},
    {id: 4, color: '#ff6347', username: "kaylee", likes: 200},
    {id: 5, color: '#ff5347', username: "abbieV", likes: 13}

  ]);

  const addNewHue = (color:string) =>
  {
    const newHue = {color, username: "kaylee", id: posts[posts.length-1].id+1, likes:0};
    setPosts([...posts, newHue]);
  }

  return (
    <div className='flex bg-slate-800 h-screen'>
      <Menu />

      <Main posts={posts} addHue={addNewHue}/>

      <Profile />
    </div>
  )
}

export default App
