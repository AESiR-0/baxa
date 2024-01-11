import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className="w-screen flex flex-col gap-20 py-10 px-10 h-screen justify-center bg-neutral-900">
    <div className=" font-medium font-['Jost'] uppercase self-center leading-40 text-[5.5rem] ">let's turn your <br /> business into a brand.</div>
    <div className="flex gap-2 flex-col">
    <div className="  text-left  text-white font-normal font-['Jost'] uppercase">just say</div>
    
    <div className="  justify-center items-center inline-flex">
        <div className=""><span className="text-white font-normal font-['Jost'] underline lowercase leading-10 text-8xl">hello</span><span className="text-neutral-700 font-normal font-['Jost'] underline lowercase leading-10 text-8xl">cheesebox@gmail.com</span></div>
    </div></div>
</div>
  )
}
