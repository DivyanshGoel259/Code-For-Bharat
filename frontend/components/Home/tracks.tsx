"use client"

import { useEffect, useState } from "react"

const tracks = [
    {
      name: "Devtopus",
      id: 1,
      imageUrl: "https://picsum.photos/seed/devtopus1/300/300"
    },
    {
      name: "Devtopus",
      id: 2,
      imageUrl: "https://picsum.photos/seed/devtopus2/300/300"
    },
    {
      name: "Devtopus",
      id: 3,
      imageUrl: "https://picsum.photos/seed/devtopus3/300/300"
    },
    {
      name: "Devtopus",
      id: 4,
      imageUrl: "https://picsum.photos/seed/devtopus4/300/300"
    },
    {
      name: "Devtopus",
      id: 5,
      imageUrl: "https://picsum.photos/seed/devtopus5/300/300"
    }
  ];
  
  

export const Tracks = ()=>{
    const [track,setTrack] = useState({id:0,isOpen:false})
    useEffect(()=>{
        console.log(track.isOpen)
    },[track.isOpen])
    return <div className="h-screen flex flex-col justify-center items-center bg-slate-800">
        <div className="text-6xl font-bold text-white">
            Tracks
        </div>
        <div className="mt-10 p-4 flex gap-2">
            {tracks.map((payload)=>{
                return <div key={payload.id} onClick={()=>{
                    if(track.isOpen){
                        setTrack({...track,isOpen:false})
                    }
                    setTrack({id:payload.id,isOpen:true})
                }} className={` transition-all duration-500 ease-in-out ${track.isOpen && track.id===payload.id ?'w-[16rem] rounded-[30px]':'w-[4rem] rounded-[30px]'}    h-72 bg-[#c04123] relative overflow-hidden`}>
                    {/* <img src={payload.imageUrl} alt={payload.name} className={`w-full h-full`} /> */}
                <div className="bg-black absolute p-2  bottom-0 left-0 right-0">
                    <div className={`font-bold p-1 rounded-full border-4 border-white text-white bg-transparent flex flex-col justify-center items-center`}>
                        {track.isOpen && payload.id === track.id ?payload.name:payload.id}
                    </div>
                    
                </div>
            </div>
            })}
        </div>
    </div>
}