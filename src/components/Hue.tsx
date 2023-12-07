// import React from "react";
import HueObject from "../HueObject"

interface Props {
  hue: HueObject,
  toggleLike: (id?:number) => void
}

const Hue = (props: Props) => {
  const r_num = Number("0x" + props.hue.color.slice(1, 3));
  const g_num = Number("0x" + props.hue.color.slice(3, 5));
  const b_num = Number("0x" + props.hue.color.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;
  
  const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";

  return (
    <div onClick={()=> props.toggleLike(props.hue.id)}
      className="btn flex flex-col max-h-full h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
    <div className="flex w-full px-5 py-2 justify-between items-center text-white">
      <div></div>
      <p className="text-2xl opacity-80" style={{color: text_color}}>{props.hue.color}</p>
      {props.hue.isLiked && <i className='fa-solid fa-heart text-4xl'></i>}
      {!props.hue.isLiked && <i className='fa-regular fa-heart text-4xl'></i>}
    </div>  

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl grow">{props.hue.username}</p>
        <div className="flex items-center gap-1">
          <p>{props.hue.likes}</p><i className='fa-regular fa-heart' style={{color: props.hue.color}}></i>
        </div>

      </div>
    </div>
  );
};

export default Hue;
