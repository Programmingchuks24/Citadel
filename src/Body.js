import React from 'react';
import man from "./pictures/download.png";

function Body() {
  return (
    <div className ="bg-blue-100 w-auto h-[50rem]">

        <div className = "text-center pt-10 flex flex-col gap-6">
            <h1 className = "text-4xl text-blue-950 font-bold w-[26rem] pl-4">Insuring Your Future From Today</h1>

            <p className = "text-base w-[26rem] pl-5 text-blue-900 ">Citadel Property Investment LLC is a business website that deals with asset management.
                Wherein a financial institution manages money on behalf of institutions, sovereign wealth funds,
                pension funds, corporations, and other large groups.
            </p>

            <div className="flex gap-4 justify-center">
                <p className="w-[10rem] h-10 bg-blue-800 pt-2 rounded-full text-white">WORK WITH US</p>
                <p className="w-[10rem] h-10 bg-white pt-2 rounded-full text-blue-800">LEARN MORE</p>
            </div>

        </div>

        <img src = {man} alt = "man" className="mt-5 h-[28rem] w-[25rem] ml-3"/>
        
    </div>
  )
}

export default Body