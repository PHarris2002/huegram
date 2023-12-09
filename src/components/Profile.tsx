import { useEffect, useState } from "react";
import HueObject from "../HueObject";

interface Props{
  hues: HueObject[]
}

const Profile = (props : Props) => {
  const [filteredUsersHues, setFilteredUsersHues] = useState<HueObject[]>([])
  const [totalLikes, setTotalLikes] = useState<number>(0);

  useEffect(() => {
    if (props.hues) {
      const filteredItems = props.hues.filter((hue) => hue.username == "PHarris");
      setFilteredUsersHues(filteredItems);

      const likesSum = filteredItems.reduce((total, hue) => total + hue.likes, 0);
      setTotalLikes(likesSum);
    }
  }, [props.hues]);

  const filteredLength = filteredUsersHues ? filteredUsersHues.length : 0;
  const numCol = Math.ceil(Math.sqrt(filteredLength)) || 2;
  const numRow = Math.ceil(Math.sqrt(filteredLength)) || 2;
  const test = numRow.toString();
  const test2 = numCol.toString();

  const calculateTotalCells = () => numCol * numRow;
  
  const renderGridItems = () => {
    if (filteredLength === 0) {
      return (
        <div className="flex justify-center items-center text-white">
          Saved Hues Go Here
        </div>
      );
    } else {
      const gridItems = filteredUsersHues.map((hue) => (
        <div style={{ backgroundColor: hue.color }}></div>
      ));

      const totalCells = calculateTotalCells();
      const placeholderDivs = Array.from({ length: totalCells - filteredLength }, () => (
        <div style={{opacity: 0}}></div>
      ));

      return [...gridItems, placeholderDivs];
    }
  };
  console.log(test);
  return (
    <div className='flex flex-col border-2 p-8 items-center justify-evenly text-white'>
        <div>
          {/* Can't get grid to form squares */}
          <div className={`border-2 saved-hues-grid grid grid-rows-${{test}} grid-cols-${{test2}} w-full min-w-[12.5rem] aspect-square`}>
            {renderGridItems()}
          </div>
          <h1 className="text-2xl">@PHarris</h1>

        </div>
        
        <div className='flex flex-col'>
        <h1 className='text-5xl ml-6'>{totalLikes}</h1>
          <div className='flex gap-x-3 items-center'>
            <i className='fa-regular fa-heart'></i>
            <h2>Likes Received</h2>
          </div>
        </div>

          <div className='flex flex-col'>
            <h1 className='text-5xl ml-4'>{filteredLength}</h1>
            <div className='flex gap-x-3 items-center'>
              <p className='font-bold'>#</p>
              <h2>Hues Posted</h2>
            </div>
          </div>


    </div>
  )
}

export default Profile