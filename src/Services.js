import React from 'react';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import HouseIcon from '@mui/icons-material/House';

function Services() {
  return (
    <div className = "w-auto h-[70rem] pt-5">

        <h1 className = "uppercase text-blue-500 text-lg text-center">Our Services</h1>

        <p className="text-2xl text-center font-bold">Services We Provide</p>

        <div className = "pl-3 grid col-span-1 gap-3">

            <div>

                <HouseIcon style={{height: "7rem", width:"5rem"}} className="text-blue-500"/>
                <div>
                    <p className = "text-2xl font-bold">Property Investment management</p>
                    <p className = "text-left w-[26rem]">Citadel LLC specialises in managing property investments with a strong fous on acquiring and managing properties in international markets.</p>
                </div>

            </div>

            <div>

                <TimelineIcon style={{height: "7rem", width:"5rem"}} className="text-blue-500"/>
                <div>
                    <p className = "text-2xl font-bold">Business Start-up Consulting</p>
                    <p className = "text-left w-[26rem]">We offer comprehensive consulting services for enterpreneurs looking to start a business in the food and entertainment sectors.</p>
                </div>
               
            </div>

            <div>

                <EqualizerIcon style={{height: "7rem", width:"5rem"}} className="text-blue-500"/>

                <div>
                    <p className = "text-2xl font-bold">Project Management</p>
                    <p className = "text-left w-[26rem]">Our project Management services at citadel llc are tailored to deliver exceptional event planning and execution.</p>
                </div>
                
            </div>

            <div>

                <DonutLargeIcon style={{height: "7rem", width:"5rem"}} className="text-blue-500"/>
                <div>
                    <p className = "text-2xl font-bold">Strategic Marketing Solutions</p>
                    <p className = "text-left w-[26rem]">Citadel LLC offers strategic marketing solutions aimed at enhancing brand development and establishing a strong digital presence. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services