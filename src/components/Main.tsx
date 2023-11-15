import React from 'react'
import Post from './Post'
import PostHue from './PostHue'

interface PostObject {
    color: string,
    username: string,
    likes: number
}
interface Props {
    posts: PostObject[],
    addHue: (color:string) => void
}

const Main = (props : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>
      
      <PostHue addHue={props.addHue} />

        {props.posts.map(  (post) => ( 
            
            <Post post={post}/>
       ))}

        

    </div>
  )
}

export default Main