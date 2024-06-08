import React from 'react';
import pic from "./pictures/Untitled.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {
  return (
    <div className = "w-auto h-[5rem] bg-blue-950 flex justify-items-center place-items-center justify-between pr-4">

        <img src = {pic} alt = "logo" className="w-[5rem] h-[5rem]"/>

        <p className="text-2xl text-white font-serif">CITADEL</p>

        <MenuOutlinedIcon fontSize='large' className="text-white"/>
    </div>
  )
}

export default Header