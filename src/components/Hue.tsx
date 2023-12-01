// import React from "react";

interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {
  return (
    <div
      className="flex flex-col max-h-full h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
    <div className="flex w-full px-5 py-2 justify-between items-center text-white">
      <div></div>
      <p className="text-2xl opacity-80">{props.hue.color}</p>
      <i className='fa-regular fa-heart text-4xl'></i>
    </div>  

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
